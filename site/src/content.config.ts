import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const maturityValues = ['seed', 'budding', 'evergreen'] as const;

// Structures: shells, gridshells, cellular solids, space trusses, etc.
// File path relative to ./src/content/structures becomes the article ID and URL segment.
// e.g. shells/grid-shells/gridshell-types.md → /structures/shells/grid-shells/gridshell-types
const structures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/structures' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    maturity: z.enum(maturityValues).default('seed'),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { structures };

