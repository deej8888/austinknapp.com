"use client";

import { motion } from "framer-motion";

type RecruiterSnapshotProps = {
  roleTargets: string[];
  interviewTopics: string[];
  recruiterNotes: string[];
};

export default function RecruiterSnapshot({
  roleTargets,
  interviewTopics,
  recruiterNotes,
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
        <h3 className="text-base font-semibold text-white">Best Fit Roles</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {roleTargets.map((role) => (
            <span key={role} className="tag">
              {role}
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
        <h3 className="text-base font-semibold text-white">Interview Topics</h3>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {interviewTopics.map((topic) => (
            <li key={topic} className="flex items-start gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{topic}</span>
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
        <h3 className="text-base font-semibold text-white">Recruiter Notes</h3>
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {recruiterNotes.map((note) => (
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
