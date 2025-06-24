import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://heath-babb.dev",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://heath-babb.dev/cv",
      lastModified: new Date(),
    },
    {
      url: "https://heath-babb.dev/contact",
      lastModified: new Date(),
    },
  ];
}
