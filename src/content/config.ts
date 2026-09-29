import { defineCollection, z } from 'astro:content';

export const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum(['devops', 'embedded', 'web', 'tools']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    role: z.string(),
    metrics: z.array(z.string()).optional(),
    highlights: z.array(z.string()),
    icon: z.string().default('folder'),
  }),
});

export const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['DevOps & Cloud', 'Development & Languages', 'Embedded & Hardware', 'Tools & Platforms']),
    items: z.array(
      z.object({
        name: z.string(),
        level: z.enum(['Proficient', 'Familiar', 'Advanced']),
        icon: z.string(),
        highlight: z.boolean().default(false),
        experience: z.string().optional(),
      })
    ),
  }),
});

export const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    location: z.string(),
    type: z.enum(['education', 'organization', 'work', 'achievement']),
    description: z.string(),
    points: z.array(z.string()),
    order: z.number().default(99),
  }),
});

export const repositoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    fullName: z.string(),
    description: z.string(),
    category: z.enum(['DevOps/Cloud', 'C/C++', 'PHP/Laravel', 'TypeScript/JS', 'Python', 'Mobile/Flutter']),
    language: z.string(),
    url: z.string().url(),
    isPublic: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    stars: z.number().default(0),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  skills: skillsCollection,
  experience: experienceCollection,
  repositories: repositoriesCollection,
};
