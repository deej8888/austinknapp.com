"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="card-premium p-8 text-center sm:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Let&apos;s build something.
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:austinknapp155@gmail.com?subject=Intro%20Conversation"
          className="btn-primary px-5 py-3 text-sm"
        >
          Email me
        </a>
        <a href="/resume.pdf" download className="btn-secondary px-5 py-3 text-sm">
          Download Resume
        </a>
        <a
          href="https://linkedin.com/in/austinknapp15"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary px-5 py-3 text-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/deej8888"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary px-5 py-3 text-sm"
        >
          GitHub
        </a>
      </div>
      <p className="mt-5 text-sm text-[var(--muted)]">
        Most production code is private due to NDA agreements.
      </p>
    </motion.div>
  );
}
