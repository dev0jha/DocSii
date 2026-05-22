import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
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

export const collections = {
  notes: notesCollection,
};
``