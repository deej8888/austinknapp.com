"use client";

import { motion } from "framer-motion";

type ProofChipsProps = {
  chips: string[];
};

export default function ProofChips({ chips }: ProofChipsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {chips.map((chip, index) => (
        <motion.div
          key={chip}
          className="card-premium px-4 py-3 text-sm text-white/90"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true, amount: 0.65 }}
        >
          {chip}
        </motion.div>
      ))}
    </div>
  );
}
