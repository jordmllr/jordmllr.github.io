import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cards' }),
  schema: z.object({
    title: z.string(),
    parent: z.string().nullable().default(null),
    related: z.array(z.string()).default([]),
    x: z.number().default(100),
    y: z.number().default(100),
    type: z.enum(['content', 'visualization']).default('content'),
  }),
});

export const collections = { cards };
