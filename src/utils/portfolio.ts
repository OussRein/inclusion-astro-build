import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Portfolio } from '~/types';
import { APP_PORTFOLIO } from 'astrowind:config';
import { cleanSlug, trimSlash, CATEGORY_BASE, TAG_BASE, PORFOLIO_PERMALINK_PATTERN, PORFOLIO_BASE } from './permalinks';

const generatePermalink = async ({
  id,
  slug,
  realisationDate,
  category,
}: {
  id: string;
  slug: string;
  realisationDate: Date;
  category: string | undefined;
}) => {
  const year = String(realisationDate.getFullYear()).padStart(4, '0');
  const month = String(realisationDate.getMonth() + 1).padStart(2, '0');
  const day = String(realisationDate.getDate()).padStart(2, '0');
  const hour = String(realisationDate.getHours()).padStart(2, '0');
  const minute = String(realisationDate.getMinutes()).padStart(2, '0');
  const second = String(realisationDate.getSeconds()).padStart(2, '0');

  const permalink = PORFOLIO_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPortfolio = async (portfolio: CollectionEntry<'portfolio'>): Promise<Portfolio> => {
  const { id, slug: rawSlug = '', data } = portfolio;
  const { Content } = await portfolio.render();

  const {
    realisationDate: rawPublishDate = new Date(),
    title,
    excerpt,
    image,
    language,
    order,
    tags: rawTags = [],
    category: rawCategory,
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const realisationDate = new Date(rawPublishDate);

  const category = rawCategory
    ? {
        slug: cleanSlug(rawCategory),
        title: rawCategory,
      }
    : undefined;

  const tags = rawTags.map((tag: string) => ({
    slug: cleanSlug(tag),
    title: tag,
  }));

  return {
    id: id,
    order: order,
    slug: slug,
    permalink: await generatePermalink({ id, slug, realisationDate, category: category?.slug }),

    realisationDate: realisationDate,

    title: title,
    language:language,
    excerpt: excerpt,
    image: image,

    category: category,
    tags: tags,

    Content: Content,
    // or 'content' in case you consume from API

  };
};

const load = async function (lang?: string): Promise<Array<Portfolio>> {
  const portfolios = await getCollection('portfolio');
  const normalizedPortfolios = portfolios.map(async (portfolio) => await getNormalizedPortfolio(portfolio));

  
  const results = (await Promise.all(normalizedPortfolios))
    .sort((a, b) => b.realisationDate.valueOf() - a.realisationDate.valueOf())
    .filter((portfolio) => !portfolio.draft);

  if (lang) {
    const resultsByLanguage = results.filter((portfolio) => portfolio.language === lang);
    return resultsByLanguage
  }else return results;
};

let _portfolios: Array<Portfolio>;

/** */
export const isBlogEnabled = true;
export const isBlogListRouteEnabled = true;
export const isBlogPostRouteEnabled = true;

export const blogListRobots = true;
export const blogPostRobots = true;

export const blogPostsPerPage = APP_PORTFOLIO?.postsPerPage;

/** */
export const fetchPortfolios = async (lang?: string): Promise<Array<Portfolio>> => {
  if (lang) {
    _portfolios = await load(lang);
  }
  else if (!_portfolios) {
    _portfolios = await load();
  }
  return _portfolios;
};

/** */
export const findPortfoliosBySlugs = async (slugs: Array<string>): Promise<Array<Portfolio>> => {
  if (!Array.isArray(slugs)) return [];

  const portfolios = await fetchPortfolios();

  return slugs.reduce(function (r: Array<Portfolio>, slug: string) {
    portfolios.some(function (portfolio: Portfolio) {
      return slug === portfolio.slug && r.push(portfolio);
    });
    return r;
  }, []);
};

/** */
export const findPortfoliosByIds = async (ids: Array<string>): Promise<Array<Portfolio>> => {
  if (!Array.isArray(ids)) return [];

  const portfolios = await fetchPortfolios();

  return ids.reduce(function (r: Array<Portfolio>, id: string) {
    portfolios.some(function (portfolio: Portfolio) {
      return id === portfolio.id && r.push(portfolio);
    });
    return r;
  }, []);
};

/** */
export const findLatestPortfolios = async ({ count }: { count?: number }): Promise<Array<Portfolio>> => {
  const _count = count || 4;
  const portfolios = await fetchPortfolios();

  return portfolios ? portfolios.slice(0, _count) : [];
};

/** */
export const getStaticPathsPortfolioList = async ({ paginate }: { paginate: PaginateFunction }) => {
  return paginate (await fetchPortfolios(), {
    params: { blog: PORFOLIO_BASE || undefined },
    pageSize: blogPostsPerPage,
  });
};

/** */
export const getStaticPathsPortfolioPost = async (lang: string) => {
  const paths = (await fetchPortfolios(lang)).flatMap((portfolio) => ({
    params: {
      page: portfolio.permalink.replace('portfolio/',''),
    },
    props: { portfolio },
  }));
    
  return paths;
};

/** */
export const getStaticPathsBlogCategory = async ({ paginate }: { paginate: PaginateFunction }) => {

  const portfolios = await fetchPortfolios();
  const categories = {};
  portfolios.map((portfolio) => {
    portfolio.category?.slug && (categories[portfolio.category?.slug] = portfolio.category);
  });

  return Array.from(Object.keys(categories)).flatMap((categorySlug) =>
    paginate(
        portfolios.filter((portfolio) => portfolio.category?.slug && categorySlug === portfolio.category?.slug),
      {
        params: { category: categorySlug, blog: CATEGORY_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { category: categories[categorySlug] },
      }
    )
  );
};

/** */
export const getStaticPathsBlogTag = async ({ paginate }: { paginate: PaginateFunction }) => {

  const portfolios = await fetchPortfolios();
  const tags = {};
  portfolios.map((portfolio) => {
    Array.isArray(portfolio.tags) &&
    portfolio.tags.map((tag) => {
        tags[tag?.slug] = tag;
      });
  });

  return Array.from(Object.keys(tags)).flatMap((tagSlug) =>
    paginate(
        portfolios.filter((portfolio) => Array.isArray(portfolio.tags) && portfolio.tags.find((elem) => elem.slug === tagSlug)),
      {
        params: { tag: tagSlug, blog: TAG_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { tag: tags[tagSlug] },
      }
    )
  );
};

/** */
export async function getRelatedPortfolios(originalPortfolio: Portfolio, maxResults: number = 4): Promise<Portfolio[]> {
  const allPortfolios = await fetchPortfolios();
  const originalTagsSet = new Set(originalPortfolio.tags ? originalPortfolio.tags.map((tag) => tag.slug) : []);

  const portfoliosWithScores = allPortfolios.reduce((acc: { portfolio: Portfolio; score: number }[], iteratedPortfolio: Portfolio) => {
    if (iteratedPortfolio.slug === originalPortfolio.slug) return acc;

    let score = 0;
    if (iteratedPortfolio.category && originalPortfolio.category && iteratedPortfolio.category.slug === originalPortfolio.category.slug) {
      score += 5;
    }

    if (iteratedPortfolio.tags) {
      iteratedPortfolio.tags.forEach((tag) => {
        if (originalTagsSet.has(tag.slug)) {
          score += 1;
        }
      });
    }

    acc.push({ portfolio: iteratedPortfolio, score });
    return acc;
  }, []);

  portfoliosWithScores.sort((a, b) => b.score - a.score);

  const selectedPortfolios: Portfolio[] = [];
  let i = 0;
  while (selectedPortfolios.length < maxResults && i < portfoliosWithScores.length) {
    selectedPortfolios.push(portfoliosWithScores[i].portfolio);
    i++;
  }

  return selectedPortfolios;
}
