"use client";

import { motion } from "framer-motion";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
  detailsButtonLabel?: string;
};

type ProjectCardProps = {
  project: Project;
  onOpenDetails?: () => void;
};

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.article className="card-premium flex h-full flex-col p-6">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="text-sm text-white/72">{project.subtitle}</p>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span
                aria-hidden
                className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-white/75"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {(project.links?.length || project.detailsButtonLabel) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="btn-secondary px-4 py-2 text-sm"
            >
              {link.label}
            </a>
          ))}

          {project.detailsButtonLabel && onOpenDetails ? (
            <button
              type="button"
              onClick={onOpenDetails}
              className="btn-primary cursor-pointer px-4 py-2 text-sm"
            >
              {project.detailsButtonLabel}
            </button>
          ) : null}
        </div>
      )}
    </motion.article>
  );
}
