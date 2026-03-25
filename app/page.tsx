"use client";

import Script from "next/script";
import { useState } from "react";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import InteractionEffects from "@/components/InteractionEffects";
import Navbar from "@/components/Navbar";
import ProofChips, { type ProofItem } from "@/components/ProofChips";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import RecruiterFAQ from "@/components/RecruiterFAQ";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import SkillsEvidence from "@/components/SkillsEvidence";
import Timeline, { type TimelineItem } from "@/components/Timeline";

const proofChips: ProofItem[] = [
  {
    label: "Traffic",
    value: "1,000,000+",
    note: "annual page views supported across deployed work",
    icon: "traffic",
  },
  {
    label: "Product",
    value: "Multi-tenant SaaS",
    note: "built from scratch with auth, workflows, onboarding, and billing",
    icon: "product",
  },
  {
    label: "ML Delivery",
    value: "Forecasting + automation",
    note: "production pipelines designed for recurring operational use",
    icon: "ml",
    compact: true,
  },
  {
    label: "Core Stack",
    value: "Python / SQL / TypeScript / Node.js",
    note: "comfortable across backend systems, data work, and product delivery",
    icon: "stack",
    compact: true,
  },
];

const capabilities = [
  {
    title: "AI + ML Systems",
    summary:
      "Designing practical forecasting and automation workflows that integrate into production operations.",
    tools: ["Python", "Forecasting", "Model Evaluation", "XGBoost"],
  },
  {
    title: "Data Engineering",
    summary:
      "Building structured pipelines for ingestion, transformation, and repeatable reporting at scale.",
    tools: ["SQL", "Data Pipelines", "Excel VBA", "Automation"],
  },
  {
    title: "SaaS Architecture",
    summary:
      "Shipping multi-tenant products with role-based workflows, onboarding, and monetization layers.",
    tools: ["TypeScript", "Node.js", "Supabase", "Stripe"],
  },
  {
    title: "Analytics Delivery",
    summary:
      "Turning data into decision-ready insights through dashboards, KPI tracking, and business reporting.",
    tools: ["Tableau", "Power BI", "Excel", "APIs"],
  },
];

const projects: Project[] = [
  {
    title: "RentPad AI",
    subtitle: "Multi-tenant AI property management SaaS",
    summary:
      "Founder-led product build spanning architecture, onboarding, pricing, and the day-to-day workflows landlords and tenants actually need.",
    bullets: [
      "Built and architected a multi-tenant platform supporting landlord and tenant workflows",
      "Designed onboarding and pricing; piloted with 8 landlords and property owners",
      "Structured shared services for auth, billing, and notifications with Supabase and Stripe",
    ],
    impact:
      "This is the clearest example of end-to-end ownership across product decisions, system design, and shipping a real SaaS experience.",
    stack: ["TypeScript", "Node.js", "Supabase", "Railway", "Stripe"],
    detailsButtonLabel: "Details",
  },
  {
    title: "Motor Intelligence",
    subtitle: "ML estimation + incentive forecasting automation",
    summary:
      "Production-facing forecasting and process automation work built around recurring OEM incentive estimation and monthly operational workflows.",
    bullets: [
      "Automated OEM incentive forecasting with a machine-learning estimation approach",
      "Scaled monthly processing with Excel VBA automation pipelines integrated with cloud workflows",
      "Built a repeatable monthly estimation and reporting workflow instead of one-off manual runs",
    ],
    impact:
      "Shows applied ML in a business setting where the work has to be usable, repeatable, and reliable inside real operating constraints.",
    stack: ["Python", "Excel VBA", "Forecasting", "Data Pipelines"],
  },
  {
    title: "NexStratus",
    subtitle: "Early-warning ML system for healthcare supply-chain risk",
    summary:
      "Capstone early-warning system focused on turning healthcare supply-chain signals into earlier, more actionable risk visibility.",
    bullets: [
      "Detected supply-chain risk up to 72 hours in advance",
      "Built an end-to-end analytics pipeline with feature engineering and model evaluation",
      "Framed the system around earlier detection of disruption signals rather than retrospective reporting",
    ],
    impact:
      "A strong end-to-end ML example: problem framing, feature engineering, evaluation, and output designed for actual decisions.",
    stack: ["Python", "XGBoost", "Evaluation", "GitHub"],
  },
];

const evidenceRows = [
  {
    capability: "Multi-tenant SaaS Architecture",
    evidence:
      "RentPad AI: built and architected a multi-tenant platform for landlord and tenant workflows, plus onboarding and pricing design.",
    stack: ["TypeScript", "Node.js", "Supabase", "Stripe"],
  },
  {
    capability: "ML Forecasting Automation",
    evidence:
      "Motor Intelligence: automated OEM incentive forecasting with a machine-learning estimation approach.",
    stack: ["Python", "Forecasting", "Automation"],
  },
  {
    capability: "Operational Pipeline Scaling",
    evidence:
      "Motor Intelligence: scaled monthly processing using Excel VBA automation pipelines integrated with cloud workflows.",
    stack: ["Excel VBA", "Data Pipelines", "Cloud Workflows"],
  },
  {
    capability: "End-to-End Analytics and Evaluation",
    evidence:
      "NexStratus: built feature engineering and model evaluation pipeline that detected supply-chain risk up to 72 hours in advance.",
    stack: ["Python", "XGBoost", "Model Evaluation"],
  },
];

const timelineItems: TimelineItem[] = [
  {
    company: "Motor Intelligence",
    role: "Data and AI Insights Analyst",
    date: "May 2024 - Present",
  },
  {
    company: "RentPad AI",
    role: "Co-Founder & CEO",
    date: "Nov 2024 - Present",
  },
  {
    company: "Sequoia Apps",
    role: "Founder & Lead Developer",
    date: "Jul 2025 - Present",
  },
  {
    company: "NexStratus",
    role: "Capstone Project Team Lead",
    date: "Oct 2025 - Present",
  },
  {
    company: "Feeding The NRV",
    role: "Founding Member & Director of Digital Strategy",
    date: "Feb 2024 - Present",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend + Product",
    items: ["Node.js", "APIs", "Multi-tenant SaaS", "Stripe"],
  },
  {
    title: "Data + ML",
    items: [
      "Forecasting",
      "Feature Engineering",
      "Model Evaluation",
      "Automation Pipelines",
    ],
  },
  {
    title: "Platforms + Analytics",
    items: [
      "Supabase",
      "Railway",
      "Linux",
      "GitHub",
      "Tableau",
      "Power BI",
      "Excel",
      "VBA",
    ],
  },
];

const principles = [
  "Design the architecture and data flow before implementation.",
  "Ship for production constraints: performance, reliability, and maintainability.",
  "Automate repetitive workflows and remove manual operational overhead.",
  "Tie technical output back to business impact and measurable outcomes.",
];

const recruiterFAQ = [
  {
    question: "How can I evaluate technical depth if the code is private?",
    answer:
      "You can review project architecture details here and request a walkthrough focused on design decisions, tradeoffs, and delivery constraints.",
  },
  {
    question: "What kinds of roles are the best fit?",
    answer:
      "AI engineering, data engineering, and startup roles where technical ownership spans architecture through shipping.",
  },
  {
    question: "What is the fastest way to reach out?",
    answer:
      "Email austinknapp155@gmail.com with role context and timeline. LinkedIn outreach is also active.",
  },
  {
    question: "Why are some project details intentionally limited?",
    answer:
      "Most production work is under NDA, so this portfolio emphasizes system scope, outcomes, and stack decisions without exposing private implementation.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Austin Knapp",
  url: "https://austinknapp.com",
  jobTitle: "AI & Data Engineer | Founder",
  email: "mailto:austinknapp155@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York Metropolitan Area",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  sameAs: [
    "https://linkedin.com/in/austinknapp15",
    "https://github.com/deej8888",
  ],
  knowsAbout: [
    "Machine Learning",
    "Data Engineering",
    "SaaS Architecture",
    "Forecasting",
    "Automation Pipelines",
    "TypeScript",
    "Python",
    "SQL",
  ],
};

export default function Home() {
  const [isRentPadOpen, setIsRentPadOpen] = useState(false);

  return (
    <div className="mono-bg min-h-screen">
      <AmbientBackdrop />
      <InteractionEffects />
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Navbar />

      <main>
        <Hero />

        <Section id="projects" title="Selected Work" eyebrow="Projects">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenDetails={
                  project.title === "RentPad AI"
                    ? () => setIsRentPadOpen(true)
                    : undefined
                }
              />
            ))}
          </div>
        </Section>

        <Section id="capabilities" title="What I Build" eyebrow="Work I Like">
          <Capabilities items={capabilities} />
        </Section>

        <Section id="proof" className="pt-2">
          <ProofChips chips={proofChips} />
        </Section>

        <Section
          id="evidence"
          title="What That Looks Like In Practice"
          eyebrow="Execution"
        >
          <SkillsEvidence rows={evidenceRows} />
        </Section>

        <Section
          id="experience"
          title="Where I&apos;ve Been Spending Time"
          eyebrow="Timeline"
        >
          <Timeline items={timelineItems} />
        </Section>

        <Section id="skills" title="Tools + Working Style" eyebrow="How I Operate">
          <Skills groups={skillGroups} principles={principles} />
        </Section>

        <Section id="faq" title="Questions People Usually Ask" eyebrow="FAQ">
          <RecruiterFAQ items={recruiterFAQ} />
        </Section>

        <Section id="contact" className="pt-3">
          <Contact />
        </Section>
      </main>

      <ProjectModal
        isOpen={isRentPadOpen}
        onClose={() => setIsRentPadOpen(false)}
      />
    </div>
  );
}
