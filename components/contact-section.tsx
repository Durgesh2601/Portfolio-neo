"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/src/data/site";

export function ContactSection() {
  return (
    <section className="contentSection shell" id="contact">
      <motion.div
        className="contactPanel"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="sectionEyebrow">Contact</p>
          <h2>{siteConfig.contact.heading}</h2>
          <p>{siteConfig.contact.blurb}</p>
        </div>

        <div className="contactGrid">
          <a href={`mailto:${siteConfig.email}`}>
            <span>Email</span>
            <strong>{siteConfig.email}</strong>
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
            <span>Phone</span>
            <strong>{siteConfig.phone}</strong>
          </a>
          <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer">
            <span>Location</span>
            <strong>{siteConfig.location}</strong>
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>@Durgesh2601</strong>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
