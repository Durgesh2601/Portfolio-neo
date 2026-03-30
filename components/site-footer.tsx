import { ArrowUpRightIcon, MailIcon } from "@/components/icons";
import { siteConfig } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter shell">
      <p>
        {siteConfig.name} • Built with Next.js, motion, and a performance-first mindset.
      </p>
      <a href={`mailto:${siteConfig.email}`} className="footerCta">
        <span className="contactIconWrap"><MailIcon className="uiIcon" /></span>
        <span>Let us connect</span>
        <ArrowUpRightIcon className="uiIcon" />
      </a>
    </footer>
  );
}
