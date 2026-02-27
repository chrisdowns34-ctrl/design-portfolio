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
            <span className="font-mono text-xs text-[#2A2A2A]">
              ({String(featured.length).padStart(2, "0")})
            </span>
          </div>

          {/* Work cards */}
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-2"
          >
            {featured.map((project, i) => (
              <motion.li
                key={project.slug}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-5 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] hover:bg-[#141414] hover:border-[#252525] transition-all duration-300"
                >
                  {/* Index */}
                  <span className="font-mono text-xs text-[#2A2A2A] shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Cover color block */}
                  <div
                    className="w-full sm:w-24 h-16 sm:h-14 shrink-0 rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: project.coverColor }}
                  />

                  {/* Title */}
                  <h2 className="flex-1 text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-none tracking-tight text-[#F2F2F2] group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex flex-col sm:items-end gap-1 shrink-0 sm:text-right">
                    <span className="font-mono text-xs text-[#6B6B6B]">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#2A2A2A]">
                      {project.year}
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

          {/* All work link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex justify-end"
          >
            <Link
              href="/work"
              className="font-mono text-sm text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200 flex items-center gap-2"
            >
              All work →
            </Link>
          </motion.div>
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
