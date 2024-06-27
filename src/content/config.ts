import { z, defineCollection } from 'astro:content';
const chapter1Collection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string()
    }),
});
export const collections = {
    'chapter-1': chapter1Collection,
};