import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Astro', 'Vashikaran', 'Black Magic', 'Love', 'Family', 'Healing']),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    phone: z.string().default('+91 98765 43210'),
    phoneHref: z.string().default('tel:+919876543210'),
    whatsappLink: z.string().default('https://wa.me/919876543210'),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string(),
    author: z.string().default('Astro Vikesh Kumar'),
  }),
});

export const collections = { services, blog };
