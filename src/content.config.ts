import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const apps = defineCollection({
	loader: glob({
		pattern: "**/*.json",
		base: "./src/content/apps",
	}),

	schema: z.object({
		name: z.string(),
		tagline: z.string(),
		description: z.string(),

		tags: z.array(z.string()).optional().default([]),

		slug: z.string(),

		iconPath: z.string().optional(),

		bannerPath: z.string().optional(),

		screenshots: z.array(z.string()).optional().default([]),

		featured: z.boolean().optional().default(false),

		platform: z
			.enum(["mobile", "desktop", "cross-platform"])
			.optional()
			.default("cross-platform"),

		status: z.enum(["live", "beta", "coming-soon"]).optional().default("live"),

		playStoreUrl: z.url(),

		privacyPolicy: z.string(),

		terms: z.string(),
	}),
});

export const collections = { apps };
