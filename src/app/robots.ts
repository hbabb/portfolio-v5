import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/contact", "/cv"],
      disallow: "/admin",
    },
    sitemap: "https://heath-babb.dev/sitemap.xml",
  };
}
