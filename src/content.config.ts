import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    section: z.string(),
    author: z.string().default('How Ancient China Worked'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
