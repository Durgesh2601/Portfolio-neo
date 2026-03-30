"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { siteConfig } from "@/src/data/site";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);
  const reverseY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="heroSection shell" id="top">
      <motion.div className="heroBackdrop heroOrbOne" style={{ y }} />
      <motion.div className="heroBackdrop heroOrbTwo" style={{ y: reverseY }} />

      <motion.div className="heroContent" style={{ y, opacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          {siteConfig.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.9 }}
        >
          {siteConfig.hero.heading}
        </motion.h1>

        <motion.p
          className="heroSummary"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.9 }}
        >
          {siteConfig.hero.summary}
        </motion.p>

        <motion.div
          className="heroActions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.75 }}
        >
          <a className="buttonPrimary" href={siteConfig.hero.primaryCta.href}>
            {siteConfig.hero.primaryCta.label}
          </a>
          <a className="buttonSecondary" href={siteConfig.hero.secondaryCta.href}>
            {siteConfig.hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="heroPanel"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.28, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="profileCard">
          <div className="profileMonogram">DK</div>
          <div>
            <p className="profileLabel">Current role</p>
            <h2>{siteConfig.role}</h2>
            <p className="profileMeta">{siteConfig.timeframe}</p>
          </div>
        </div>

        <div className="statGrid">
          {siteConfig.hero.stats.map((stat) => (
            <div key={stat.label} className="statCard">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="signalCard">
          <p className="signalLabel">Focus areas</p>
          <ul>
            <li>SEO-ready architecture</li>
            <li>Motion with restraint</li>
            <li>High-performance frontend delivery</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
