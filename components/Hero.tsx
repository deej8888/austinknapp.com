"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 26]);

  return (
    <section
      id="hero"
      ref={targetRef}
      className="scroll-mt-24 pt-20 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div style={{ y: titleY }} className="space-y-8">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.14em] text-white/80 uppercase">
            Wayne, NJ - Open to Remote
          </p>

          <div className="space-y-5">
            <div className="headline-wrap">
              <span aria-hidden className="headline-glow" />
              <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI &amp; Data Engineer | Founder
              </h1>
            </div>
            <p className="max-w-xl text-base text-[var(--muted)] sm:text-lg">
              Building ML systems, SaaS platforms, and data pipelines that
              ship.
            </p>
          </div>

          <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
            <li className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              Multi-tenant SaaS architecture
            </li>
            <li className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              ML forecasting automation
            </li>
            <li className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              Data pipeline design and delivery
            </li>
            <li className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              Product + engineering execution
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary px-5 py-3 text-sm">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary px-5 py-3 text-sm">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.aside style={{ y: cardY }} className="card-premium p-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <Image
              src="/profile-grid.svg"
              alt="Abstract profile placeholder"
              width={56}
              height={56}
              priority
              className="rounded-xl border border-white/20 bg-[#0f0f10]"
            />
            <div>
              <p className="text-sm font-semibold text-white">Austin Knapp</p>
              <p className="text-xs text-[var(--muted)]">
                AI &amp; Data Engineer | Founder
              </p>
            </div>
          </div>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <dt className="text-[var(--muted)]">Location</dt>
              <dd className="text-slate-100">Wayne, NJ</dd>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <dt className="text-[var(--muted)]">Email</dt>
              <dd>
                <a
                  href="mailto:austinknapp155@gmail.com"
                  className="text-slate-100 transition hover:text-white"
                >
                  austinknapp155@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <dt className="text-[var(--muted)]">LinkedIn</dt>
              <dd>
                <a
                  href="https://linkedin.com/in/austinknapp15"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 transition hover:text-white"
                >
                  /in/austinknapp15
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <dt className="text-[var(--muted)]">GitHub</dt>
              <dd>
                <a
                  href="https://github.com/deej8888"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 transition hover:text-white"
                >
                  github.com/deej8888
                </a>
              </dd>
            </div>
          </dl>

          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-6 w-full justify-center px-5 py-3 text-sm"
          >
            Download Resume
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
