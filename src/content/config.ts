import { z, defineCollection } from "astro:content";

// Schemas
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
