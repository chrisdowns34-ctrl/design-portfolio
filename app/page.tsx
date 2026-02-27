"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/projects";
import Footer from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Availability label */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="font-mono text-xs text-[#C9A96E] tracking-[0.2em] uppercase">
                Available for freelance work
              </span>
            </motion.div>

            {/* Name — oversized display type */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <h1 className="text-[clamp(4rem,13vw,11rem)] font-bold leading-[0.9] tracking-tighter text-[#F2F2F2]">
                Chris
                <br />
                Downs.
              </h1>
            </motion.div>

            {/* Tagline + CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-2"
            >
              <p className="text-[clamp(1rem,2.5vw,1.375rem)] text-[#6B6B6B] max-w-lg leading-relaxed">
                Product designer who designs with intent,
                <br className="hidden sm:block" /> builds with code, and ships
                things that work.
              </p>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/work"
                  className="text-sm font-medium text-[#0A0A0A] bg-[#F2F2F2] px-6 py-3 rounded-full hover:bg-[#C9A96E] transition-all duration-200"
                >
                  View Work
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200 px-4 py-3"
                >
                  About me →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Selected Work ──────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="flex items-baseline justify-between mb-8">
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
              Selected Work
            </span>
            <Link
              href="/work"
              className="font-mono text-xs text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200"
            >
              All work →
            </Link>
          </div>

          {/* 2×2 card grid */}
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {featured.map((project, i) => (
              <motion.li
                key={project.slug}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] overflow-hidden hover:border-[#2A2A2A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                >
                  {/* ── Banner ── */}
                  <div
                    className="relative w-full aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: project.coverColor }}
                  >
                    {/* Depth gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Index */}
                    <span className="absolute top-4 left-4 font-mono text-xs text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Category badge */}
                    <span className="absolute top-4 right-4 font-mono text-xs text-white/50 bg-black/25 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* ── Info tier ── */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="text-xl font-bold tracking-tight text-[#F2F2F2] leading-snug">
                        {project.title}
                      </h2>
                      <span className="text-[#2A2A2A] group-hover:text-[#C9A96E] transition-colors duration-300 text-lg shrink-0 mt-0.5">
                        →
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#2A2A2A]">
                        {project.year}
                      </span>
                      <span className="font-mono text-xs text-[#2A2A2A]">·</span>
                      <span className="font-mono text-xs text-[#2A2A2A]">
                        {project.role}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── About strip ────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10">
            <div>
              <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
                About
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#F2F2F2] leading-relaxed max-w-2xl mb-8">
                I&apos;m a product designer with a rare overlap — I design with
                real craft and build with real code. Most of my work lives at
                the intersection of product strategy, interface design, and
                engineering.
              </p>
              <Link
                href="/about"
                className="font-mono text-sm text-[#C9A96E] hover:text-[#F2F2F2] transition-colors duration-200"
              >
                More about me →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
