import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { file } from "astro:schema";
const blogCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/articles/products/", pattern: "**/*.md" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      index: z.any(),
      title: z.string(),
      // Transform string to Date object
      date: z.coerce.date(),
      //image: image().optional(),
      catergory: z.string(),
      parent: z.string(),
      tags: z.string().array(),
      id: z.string(),

      images: z.string().array().optional(),
      videos: z.string().array().optional(),
    }),
});

export const collections = { blogCollection };
