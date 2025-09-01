import { defineCollection, z } from "astro:content";

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    listServices: z.object({
      serv1: z.string(),
      serv2: z.string(),
      serv3: z.string(),
    }),
  })
})

export const collections = { services }