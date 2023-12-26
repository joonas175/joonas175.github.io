import { z } from 'astro:content';

export const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  tags: z.array(z.string()).optional(),
  date: z.coerce.string().transform((str) => new Date(str)),
});

export type Blog = z.infer<typeof blogSchema>;