"use client";

import { motion } from "framer-motion";

import { navItems, siteConfig } from "@/src/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <motion.header
      className="siteHeader shell"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="brandMark" aria-label="Go to top">
        <span className="brandGlyph">&lt;D/&gt;</span>
        <span className="brandMeta">
          <strong>{siteConfig.shortName}</strong>
          <small>{siteConfig.role}</small>
        </span>
      </a>

      <nav className="navLinks" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <a className="headerLink" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
