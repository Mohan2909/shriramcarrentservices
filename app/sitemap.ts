import type { MetadataRoute } from "next";

import { locations, SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedAt = new Date("2026-04-06T00:00:00.000Z");
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/fleet", priority: 0.84, changeFrequency: "weekly" as const },
    { route: "/services", priority: 0.88, changeFrequency: "weekly" as const },
    { route: "/booking", priority: 0.92, changeFrequency: "daily" as const },
    { route: "/contact", priority: 0.74, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticRoutes.map((entry) => ({
      url: `${SITE_URL}${entry.route}`,
      lastModified: publishedAt,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...locations.map((location) => ({
      url: `${SITE_URL}/${location.route}`,
      lastModified: publishedAt,
      changeFrequency: "weekly" as const,
      priority: 0.86,
    })),
  ];
}
