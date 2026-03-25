"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,10,15,0.68)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          className="flex flex-col leading-none"
        >
          <span className="text-[0.55rem] font-semibold tracking-[0.32em] text-white/45 uppercase">
            Personal Website
          </span>
          <span className="mt-1 text-sm font-semibold tracking-[0.2em] text-white uppercase">
            Austin Knapp
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`rounded-full px-3 py-1.5 text-sm transition ${
                      isActive
                        ? "bg-white/12 text-white"
                        : "text-[var(--muted)] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/resume.pdf" download className="btn-secondary px-4 py-2 text-sm">
            Resume
          </a>
          <a href="#contact" className="btn-primary px-4 py-2 text-sm">
            Say Hello
          </a>
        </div>
      </div>
    </header>
  );
}
