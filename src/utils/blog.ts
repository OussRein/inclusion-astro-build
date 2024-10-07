import type { PaginateFunction } from 'astro';
import type { CollectionEntry } from 'astro:content';
import type { CategoryNode, Post } from '~/types';
import { APP_BLOG } from 'astrowind:config';
import { cleanSlug, trimSlash, BLOG_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';


function removeNodesAndEdgesOfPosts(response: Post[]): Post[] {
  const transform = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(item => transform(item.node || item));
    } else if (typeof data === 'object' && data !== null) {
      const newData: any = {};
      for (const key in data) {
        if (key === 'nodes' || key === 'edges') {
          if (Array.isArray(data[key])) {
            return transform(data[key]); // Directly return transformed array
          }
        } else if (key === 'node') {
          return transform(data[key]);
        } else {
          newData[key] = transform(data[key]);
        }
      }
      return newData;
    }
    return data;
  };

  return transform(response);
}

function removeNodesAndEdgesOfSinglePost(response: Post): Post {
  const transform = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(item => transform(item.node || item));
    } else if (typeof data === 'object' && data !== null) {
      const newData: any = {};
      for (const key in data) {
        if (key === 'nodes' || key === 'edges') {
          if (Array.isArray(data[key])) {
            return transform(data[key]); // Directly return transformed array
          }
        } else if (key === 'node') {
          return transform(data[key]);
        } else {
          newData[key] = transform(data[key]);
        }
      }
      return newData;
    }
    return data;
  };

  return transform(response);
}

const generatePermalink = async ({
  id,
  slug,
  date,
  categories,
}: {
  id: string;
  slug: string;
  date: Date;
  categories: {
    nodes: CategoryNode[];
  };
}) => {
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', categories.nodes[0].slug || '')
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

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const {
    date: rawPublishDate = new Date(),
    title,
    excerpt,
    image,
    tags: rawTags = [],
    categories,
    author,
    draft = false,
    metadata = {},
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const date = new Date(rawPublishDate);

  const tags = rawTags.map((tag: string) => ({
    slug: cleanSlug(tag),
    title: tag,
  }));

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, date, categories: categories }),
    date: date,
    title: title,
    excerpt: excerpt,
    featuredImage: image,
    categories: categories,
    tags: tags,
    author: author,
    draft: draft,
    metadata,
    Content: Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

enum LanguageCodeFilterEnum {
  DEFAULT = 'default',
  ALL = 'all',
  EN = 'EN',
  FR = 'FR',
  AR = 'AR',
}


const load = async function (lang?:LanguageCodeFilterEnum): Promise<Array<Post>> {
  const response = await fetch('https://inclusion.dz/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query getPosts {
    posts(first: 100, after: null, where: {categoryNotIn: [131], language: `+ lang +`}) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          date
          excerpt
          categories {
            nodes {
              name
              slug
              databaseId
            }
          }
        }
      }
    }
  }
        `,
    }),
  });

  // destructure data from our JSON
  const { data } = await response.json();

  //  assign the array of nodes to "posts" variable for usability

  const posts = removeNodesAndEdgesOfPosts(data.posts.edges) ;
  
  return posts;
};

let _posts: Array<Post>;
let _enPosts: Array<Post>;
let _frPosts: Array<Post>;
let _arPosts: Array<Post>;

/** */
export const isBlogEnabled = APP_BLOG.isEnabled;
export const isRelatedPostsEnabled = APP_BLOG.isRelatedPostsEnabled;
export const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
export const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
export const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
export const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;

export const blogListRobots = APP_BLOG.list.robots;
export const blogPostRobots = APP_BLOG.post.robots;
export const blogCategoryRobots = APP_BLOG.category.robots;
export const blogTagRobots = APP_BLOG.tag.robots;

export const blogPostsPerPage = APP_BLOG?.postsPerPage;

/** */
export const fetchPosts = async (lang?: string): Promise<Array<Post>> => {
  if (lang) {
    if (lang === 'FR'){
      if (!_frPosts) {
        _frPosts = await load(LanguageCodeFilterEnum.FR);
      }
      _posts = _frPosts;
      return _posts;
      
    }else if (lang === 'EN'){

      if (!_enPosts) {
        _enPosts = await load(LanguageCodeFilterEnum.EN);
      }
      _posts = _enPosts;
      return _posts;

    }else if (lang === 'AR'){
      if (!_arPosts) {
        _arPosts = await load(LanguageCodeFilterEnum.AR);
      }
      _posts = _arPosts;
      return _posts;

    }
  }else if (!_posts) {
    _posts = await load();
  }

  return _posts;
};

/** */
export const findPostsBySlugs = async (slugs: Array<string>): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts();

  return slugs.reduce(function (r: Array<Post>, slug: string) {
    posts.some(function (post: Post) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findPostById = async (id: string): Promise<Post> => {
  
  const postResponse = await fetch('https://inclusion.dz/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query getContent {
    post(id: "${id}", idType: ID) {
      content
      author {
        node {
          name
        }
      }
      date
      id
      slug
      title
      categories {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  }
        `,
    }),
  });

  // destructure data from our JSON
  const { data } = await postResponse.json();

  //  assign the array of nodes to "posts" variable for usability
  const content = removeNodesAndEdgesOfSinglePost(data.post);

  return content;
};

/** */
export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(0, _count) : [];
};

/** */
export const getStaticPathsBlogList = async ({ paginate }: { paginate: PaginateFunction }, lang?: string ) => {
  return paginate(await fetchPosts(lang), {
    params: { blog: BLOG_BASE || undefined },
    pageSize: 6,
  });
};

/** */
export const getStaticPathsBlogPost = async () => {
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: 'blog/' + post.slug,
    },
    props: { post },
  }));
};

/** */
export const getStaticPathsBlogCategory = async ({ paginate }: { paginate: PaginateFunction }, lang: string) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled) return [];

  const posts = await fetchPosts(lang);
  const categories = {};
  posts.map((post) => {
    post.categories[0].slug && (categories[post.categories[0].slug] = post.categories[0]);
  });

  return Array.from(Object.keys(categories)).flatMap((categorySlug) =>
    paginate(
      posts.filter((post) => post.categories[0].slug && categorySlug === post.categories[0].slug),
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
  if (!isBlogEnabled || !isBlogTagRouteEnabled) return [];

  const posts = await fetchPosts();
  const tags = {};
  posts.map((post) => {
    Array.isArray(post.tags) &&
      post.tags.map((tag) => {
        tags[tag?.slug] = tag;
      });
  });

  return Array.from(Object.keys(tags)).flatMap((tagSlug) =>
    paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.slug === tagSlug)),
      {
        params: { tag: tagSlug, blog: TAG_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { tag: tags[tagSlug] },
      }
    )
  );
};

/** */
export async function getRelatedPosts(originalPost?: Post, maxResults: number = 4): Promise<Post[]> {
  const allPosts = await fetchPosts();
  const i = 0.5 - Math.random();

  const sortedPosts= allPosts.sort(() => i);

  const selectedPosts = sortedPosts.slice(0, maxResults);

  return selectedPosts;
}
