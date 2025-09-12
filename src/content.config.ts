import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdoc}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const docs = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/docs", pattern: "**/*.{md,mdoc}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    updatedDate: z.coerce.date(),
    author: z.string().default("Joseph Lawler"),
  }),
});

export const collections = { blog, docs };
