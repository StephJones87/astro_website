import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string(),
  }),
});

const communitiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  communities: communitiesCollection,
};
