"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/src/data/site";

export function ExperienceSection() {
  return (
    <section className="contentSection shell" id="experience">
      <div className="sectionIntro stickyIntro">
        <p className="sectionEyebrow">Experience</p>
        <h2>Frontend work that balances speed, clarity, and product thinking.</h2>
        <p>
          I enjoy taking ambitious UI ideas and translating them into maintainable systems
          that feel smooth in production, not just in design files.
        </p>
      </div>

      <div className="stackedCards">
        {siteConfig.experience.map((item, index) => (
          <motion.article
            key={item.company}
            className="experienceCard"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
          >
            <div className="experienceHeader">
              <div>
                <p className="sectionEyebrow">{item.period}</p>
                <h3>{item.title}</h3>
              </div>
              <a href={siteConfig.companyUrl} target="_blank" rel="noreferrer">
                {item.company}
              </a>
            </div>
            <p>{item.description}</p>
            <ul className="bulletList">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
