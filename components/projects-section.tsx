"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/src/data/site";

export function ProjectsSection() {
  return (
    <section className="contentSection shell" id="projects">
      <div className="sectionIntro">
        <p className="sectionEyebrow">Featured Projects</p>
        <h2>Selected builds that show product sense, frontend craft, and execution.</h2>
      </div>

      <div className="projectGrid">
        {siteConfig.projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="projectCard"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
          >
            <div
              className="projectVisual"
              aria-hidden="true"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(10, 12, 16, 0.16), rgba(10, 12, 16, 0.44) 45%, rgba(10, 12, 16, 0.92) 100%), url(${project.image})`,
              }}
            >
              <span>{project.name}</span>
              <small>{project.stack.slice(0, 3).join(" • ")}</small>
            </div>

            <div className="projectTopline">
              <p className="sectionEyebrow">0{index + 1}</p>
              <span>Case study</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="projectImpact">{project.impact}</p>
            <div className="chipRow">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="projectActions">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site
              </a>
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                Source code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
