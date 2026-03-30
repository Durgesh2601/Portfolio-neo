import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} Portfolio`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.theme.dark.background,
    theme_color: siteConfig.theme.dark.background,
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/png"
      }
    ]
  };
}
