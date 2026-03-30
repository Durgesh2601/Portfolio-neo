"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/src/data/site";

export function AboutSection() {
  return (
    <section className="contentSection shell aboutSplit" id="about">
      <motion.div
        className="aboutPanel"
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75 }}
      >
        <p className="sectionEyebrow">About</p>
        <h2>Strong frontend engineering with an eye for detail and iteration.</h2>
      </motion.div>

      <motion.div
        className="aboutCopy"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        {siteConfig.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </motion.div>
    </section>
  );
}
