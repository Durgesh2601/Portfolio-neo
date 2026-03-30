import { siteConfig } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter shell">
      <p>
        {siteConfig.name} • Built with Next.js, motion, and a performance-first mindset.
      </p>
      <a href={`mailto:${siteConfig.email}`}>Let us connect</a>
    </footer>
  );
}
