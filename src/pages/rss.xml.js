import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: 'How Ancient China Worked',
    description: 'Clear answers to practical questions about life, names, government and society in imperial China.',
    site: context.site,
    items: articles.map((article) => ({ title: article.data.title, description: article.data.description, pubDate: article.data.publishedAt, link: `/names/${article.id}/` })),
  });
}
