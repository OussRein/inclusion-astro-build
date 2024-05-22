import { getRssString } from '@astrojs/rss';

import { SITE, METADATA } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.slug, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.date),
    })),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
