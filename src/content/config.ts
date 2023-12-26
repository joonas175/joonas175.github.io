import { defineCollection } from 'astro:content';
import { projectSchema } from './projectSchema';
import { blogSchema } from './blogSchema';

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export type ProjectCollection = typeof projectCollection;

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export type BlogCollection = typeof blogCollection;

export const collections = {
  'project': projectCollection,
  'blog': blogCollection,
};