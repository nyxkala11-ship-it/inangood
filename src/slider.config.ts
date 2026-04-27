import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const slide = defineCollection({
    loader: glob({ pattern: "**/*.{png}", base: "./src/assets/slide"}),
    schema: z.object({

    }),
});

export const collections = { slide };