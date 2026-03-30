"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/src/data/site";

export function SkillsSection() {
  return (
    <section className="contentSection shell" id="skills">
      <div className="sectionIntro">
        <p className="sectionEyebrow">Toolset</p>
        <h2>The stack I reach for when building polished product experiences.</h2>
      </div>

      <motion.div
        className="skillsCloud"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {siteConfig.skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="skillPill"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
