import { z } from 'astro:content';

export const projectSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  languages: z.array(z.string()).optional(),
  frameworks: z.array(z.string()).optional(),
  otherSkills: z.array(z.string()).optional(),
  shortDescription: z.string().optional(),
  type: z.enum(['school', 'work', 'hobby', 'other']).optional(),
  start: z.date().optional(),
  end: z.date().optional(),
});

export type Project = z.infer<typeof projectSchema>;