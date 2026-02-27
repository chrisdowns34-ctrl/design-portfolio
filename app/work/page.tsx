"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Footer from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Header ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-6 block">
              Work
            </span>
            <h1 className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.9] tracking-tighter text-[#F2F2F2]">
              Selected
              <br />
              Projects.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Project List ──────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#1F1F1F] flex-1">
        <div className="max-w-[1400px] mx-auto">
          <motion.ol
            variants={stagger}
            initial="hidden"
            animate="show"
            className="divide-y divide-[#1F1F1F]"
          >
            {projects.map((project, i) => (
              <motion.li key={project.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-8 md:py-10"
                >
                  {/* Index */}
                  <span className="font-mono text-xs text-[#2A2A2A] shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Cover color block */}
                  <div
                    className="w-full sm:w-24 h-16 sm:h-14 shrink-0 rounded-sm transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: project.coverColor }}
                  />

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-none tracking-tight text-[#F2F2F2] group-hover:translate-x-1 transition-transform duration-300 mb-2">
                      {project.title}
                    </h2>
                    <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col sm:items-end gap-1 shrink-0 sm:text-right">
                    <span className="font-mono text-xs text-[#6B6B6B]">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#2A2A2A]">
                      {project.year}
                    </span>
                    <span className="font-mono text-xs text-[#2A2A2A]">
                      {project.role}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span className="hidden sm:block text-[#2A2A2A] group-hover:text-[#C9A96E] transition-colors duration-300 shrink-0">
                    →
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <Footer />
    </main>
  );
}
