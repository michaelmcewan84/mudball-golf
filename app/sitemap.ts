import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mudballgolf.uk",
      lastModified: new Date(),
    },
    {
      url: "https://mudballgolf.uk/privacy",
      lastModified: new Date(),
    },
  ];
}