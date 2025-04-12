import { z } from 'zod';
import imageValidation from './imageValidation';

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(500),
    category: z.string().min(3).max(20),
    image: z.string().url().refine(async (url) => {
        const isImage = await imageValidation(url);
        return isImage;
    }),
    pitch: z.string().min(10),
})