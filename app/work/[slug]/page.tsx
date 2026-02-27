"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getProjectBySlug, projects } from "@/lib/projects";
import Footer from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-36 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {/* Back link */}
            <motion.div variants={fadeUp} transition={{ duration: 0.4 }}>
              <Link
                href="/work"
                className="font-mono text-xs text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200 mb-12 block"
              >
                ← All Work
              </Link>
            </motion.div>

            {/* Project title */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter text-[#F2F2F2] mb-4">
                {project.title}
              </h1>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-[#6B6B6B] max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </motion.div>

            {/* Meta row */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {[
                { label: "Role", value: project.role },
                { label: "Category", value: project.category },
                { label: "Year", value: project.year },
                { label: "Tools", value: project.tools.join(", ") },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-4"
                >
                  <span className="font-mono text-xs text-[#2A2A2A] tracking-[0.15em] uppercase block mb-2">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm text-[#F2F2F2] leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* External links */}
            {(project.link || project.codeLink) && (
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mt-6"
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#0A0A0A] bg-[#5B83F5] px-4 py-2 rounded-full hover:bg-[#F2F2F2] transition-colors duration-200"
                  >
                    Live Site →
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#6B6B6B] bg-[#111111] border border-[#1F1F1F] px-4 py-2 rounded-full hover:text-[#F2F2F2] hover:border-[#2A2A2A] transition-all duration-200"
                  >
                    View Code →
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Cover image placeholder ───────────────────────── */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[16/7] rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: project.coverColor }}
          >
            <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
              Project Preview
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Case study content ────────────────────────────── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto space-y-3">
          <ContentRow label="Overview" delay={0}>
            <p className="text-[clamp(1rem,2vw,1.125rem)] text-[#F2F2F2] leading-relaxed">
              {project.overview}
            </p>
          </ContentRow>

          <ContentRow label="Challenge" delay={0.05}>
            <p className="text-[clamp(1rem,2vw,1.125rem)] text-[#F2F2F2] leading-relaxed">
              {project.challenge}
            </p>
          </ContentRow>

          <ContentRow label="Process" delay={0.1}>
            <p className="text-[clamp(1rem,2vw,1.125rem)] text-[#F2F2F2] leading-relaxed">
              {project.process}
            </p>
          </ContentRow>

          <ContentRow label="Work" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: project.coverColor }}
                >
                  <span className="font-mono text-xs text-white/20 tracking-[0.2em] uppercase">
                    Image {n}
                  </span>
                </div>
              ))}
            </div>
          </ContentRow>

          <ContentRow label="Outcomes" delay={0.2}>
            <ul className="space-y-4">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[#5B83F5] mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1rem,2vw,1.125rem)] text-[#F2F2F2] leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </ContentRow>
        </div>
      </section>

      {/* ── Next project ──────────────────────────────────── */}
      <section className="px-6 md:px-12 py-8 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase block mb-6">
            Next Project
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] hover:bg-[#141414] hover:border-[#252525] transition-all duration-300"
          >
            <div
              className="w-24 h-14 shrink-0 rounded-xl transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: nextProject.coverColor }}
            />
            <h3 className="flex-1 text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-[#F2F2F2] group-hover:translate-x-1 transition-transform duration-300">
              {nextProject.title}
            </h3>
            <span className="text-[#2A2A2A] group-hover:text-[#5B83F5] transition-colors duration-300 text-2xl shrink-0">
              →
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContentRow({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12"
    >
      <div className="pt-0.5">
        <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
          {label}
        </span>
      </div>
      <div>{children}</div>
    </motion.div>
  );
}
