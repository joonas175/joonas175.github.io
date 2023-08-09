import { defineCollection } from 'astro:content';
import { projectSchema } from './projectSchema';

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export type ProjectCollection = typeof projectCollection;

export const collections = {
  'project': projectCollection,
};