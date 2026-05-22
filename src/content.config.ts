import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    topic: z.string().optional(),
    order: z.number().default(999),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
