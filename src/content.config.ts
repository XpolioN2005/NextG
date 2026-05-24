import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional().default([]),
    slug: z.string(),
    iconPath: z.string().optional(),
    featured: z.boolean().optional().default(false),
    platform: z.enum(['mobile', 'desktop', 'cross-platform']).optional().default('cross-platform'),
    status: z.enum(['live', 'beta', 'coming-soon']).optional().default('live'),
  }),
});

export const collections = { apps };
