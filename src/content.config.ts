import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { file } from "astro:schema";

const materialColection = defineCollection({
  loader: glob({ base: "./src/articles/materials/", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      image: z.string().optional(),
      index: z.string().optional(),
    }),
});

const materialTwoColection = defineCollection({
  loader: glob({ base: "./src/articles/materialstwo/", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      image: z.string().optional(),
      video: z.string().optional(),
    }),
});

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
      kieu: z.string().array().optional(),
      soLuong: z.string().array().optional(),
      kichThuoc: z.string().array().optional(),
      tuyChon: z.string().array().optional(),
      quyCach: z.string().optional(),
      description: z.string().optional(),
    }),
});

export const collections = {
  blogCollection,
  materialColection,
  materialTwoColection,
};
