"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { navItems, siteConfig } from "@/src/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className={`siteHeader shell ${isMenuOpen ? "siteHeaderOpen" : ""}`}
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
          <a key={item.href} href={item.href} className="navLinkPill" onClick={() => setIsMenuOpen(false)}>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <a className="headerLink headerActionLink" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          <GithubIcon className="uiIcon" />
          <span>GitHub</span>
          <ArrowUpRightIcon className="uiIcon" />
        </a>
        <ThemeToggle />
        <button
          type="button"
          className="menuToggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobileNavPanel ${isMenuOpen ? "mobileNavPanelOpen" : ""}`}>
        <nav className="mobileNavLinks" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowUpRightIcon className="uiIcon" />
            </a>
          ))}
        </nav>

        <a
          className="headerLink headerActionLink mobileGithubLink"
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          <GithubIcon className="uiIcon" />
          <span>GitHub</span>
          <ArrowUpRightIcon className="uiIcon" />
        </a>
      </div>
    </motion.header>
  );
}
