import type { MetadataRoute } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Shriram Travels",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fff7ed",
    theme_color: "#f97316",
  };
}