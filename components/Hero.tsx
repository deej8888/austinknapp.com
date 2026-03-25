"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type IconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  download?: boolean;
};

function IconLink({ href, label, children, download }: IconLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/78 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] hover:text-white"
    >
      {children}
    </a>
  );
}

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
      className="scroll-mt-24 pt-[4.5rem] pb-12 sm:pt-24 sm:pb-16"
    >
      <div className="container-shell grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div style={{ y: titleY }} className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#eef4ff] shadow-[0_0_18px_rgba(196,214,255,0.8)]" />
            <span className="text-[0.65rem] font-semibold tracking-[0.32em] text-white/65 uppercase">
              Personal site of Austin Knapp
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">
              New Jersey / New York Metro / Open to Remote / AI, Data, Product
            </p>

            <div className="headline-wrap">
              <span aria-hidden className="headline-glow" />
              <h1 className="max-w-3xl text-5xl leading-[0.97] font-semibold tracking-tight text-white sm:text-6xl lg:text-[5.2rem]">
                I build systems that turn ideas into real, working products.
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              This site is the closer look. Right now I split time between
              production analytics work at Motor Intelligence, co-founding
              RentPad AI, and building through Sequoia Apps with a bias toward
              things that ship and actually remove operational pain.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary px-5 py-3 text-sm">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary px-5 py-3 text-sm">
              Reach Out
            </a>
          </div>
        </motion.div>

        <motion.aside
          style={{ y: cardY }}
          className="card-premium relative overflow-hidden p-6 sm:p-7"
        >
          <div
            aria-hidden
            className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-white/50 uppercase">
                Field Notes
              </p>
              <h2 className="mt-3 max-w-md text-3xl leading-tight font-semibold text-white sm:text-[2.2rem]">
                What this site is actually for.
              </h2>
            </div>

            <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
              2026
            </div>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]">
            I like projects where model quality, product decisions, and
            delivery constraints all matter at the same time. Most of the code
            I ship lives in private repos or behind NDA walls, so this page
            focuses on scope, systems, and how I think.
          </p>

          <div className="mt-6 space-y-3">
            <article className="hero-note">
              <p className="text-[0.68rem] font-semibold tracking-[0.26em] text-white/50 uppercase">
                Current Stack
              </p>
              <p className="relative mt-3 text-sm leading-6 text-white/90">
                Python, SQL, TypeScript, Node.js, forecasting, automation
                pipelines, and product-minded engineering.
              </p>
            </article>

            <div className="grid gap-3 sm:grid-cols-2">
              <article className="hero-note">
                <p className="text-[0.68rem] font-semibold tracking-[0.26em] text-white/50 uppercase">
                  Base
                </p>
                <p className="relative mt-3 text-lg font-semibold text-white">
                  New Jersey / New York Metro
                </p>
                <p className="relative mt-1 text-sm text-[var(--muted)]">
                  Open to remote and hybrid work.
                </p>
              </article>

              <article className="hero-note">
                <p className="text-[0.68rem] font-semibold tracking-[0.26em] text-white/50 uppercase">
                  Reach
                </p>
                <div className="relative mt-4 flex flex-wrap gap-3">
                  <IconLink
                    href="mailto:austinknapp155@gmail.com"
                    label="Email Austin"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6.5h16v11H4z" />
                      <path d="m5 7 7 6 7-6" />
                    </svg>
                  </IconLink>

                  <IconLink
                    href="https://linkedin.com/in/austinknapp15"
                    label="LinkedIn profile"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.12.9 2.03 2 2.03h.03a2.03 2.03 0 1 0 .02-4.06ZM20.8 12.79c0-3.47-1.85-5.08-4.31-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.73c.04.72 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.68.89-1.4 1.93-1.4 1.36 0 1.9 1.05 1.9 2.58V20h3.38v-7.21Z" />
                    </svg>
                  </IconLink>

                  <IconLink
                    href="https://github.com/deej8888"
                    label="GitHub profile"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.88 1.56 2.3 1.11 2.86.85.09-.66.34-1.11.62-1.36-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.06A9.33 9.33 0 0 1 12 7.09a9.3 9.3 0 0 1 2.5.35c1.9-1.34 2.74-1.06 2.74-1.06.55 1.4.2 2.45.1 2.71.64.73 1.03 1.65 1.03 2.78 0 3.96-2.33 4.84-4.56 5.1.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.3 10.3 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
                    </svg>
                  </IconLink>

                  <IconLink
                    href="/resume.pdf"
                    label="Download resume"
                    download
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 3.5h6l4 4V20a.5.5 0 0 1-.5.5h-9A2.5 2.5 0 0 1 6 18V6a2.5 2.5 0 0 1 2.5-2.5Z" />
                      <path d="M14 3.5V8h4" />
                      <path d="M12 11v6" />
                      <path d="m9.5 14.5 2.5 2.5 2.5-2.5" />
                    </svg>
                  </IconLink>
                </div>
              </article>
            </div>
          </div>

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
