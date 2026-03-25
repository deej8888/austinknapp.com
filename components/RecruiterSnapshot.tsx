"use client";

import { motion } from "framer-motion";

type RecruiterSnapshotProps = {
  focusItems: string[];
  workingStyleItems: string[];
  notes: string[];
};

export default function RecruiterSnapshot({
  focusItems,
  workingStyleItems,
  notes,
}: RecruiterSnapshotProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <motion.article
        className="card-premium p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h3 className="text-base font-semibold text-white">Current Focus</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {focusItems.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </motion.article>

      <motion.article
        className="card-premium p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h3 className="text-base font-semibold text-white">How I Work</h3>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {workingStyleItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.article>

      <motion.article
        className="card-premium p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <h3 className="text-base font-semibold text-white">Good To Know</h3>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {notes.map((note) => (
            <li key={note} className="flex items-start gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
}
