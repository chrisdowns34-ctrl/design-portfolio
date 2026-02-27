"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

const skills = [
  { category: "Design", items: ["Product Design", "UX Research", "Interaction Design", "Design Systems", "Prototyping", "Brand Identity"] },
  { category: "Build", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "React Native", "Framer Motion", "Supabase"] },
  { category: "Tools", items: ["Figma", "Protopie", "Storybook", "Tokens Studio", "Notion", "Linear"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Header ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-6 block"
            >
              About
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.9] tracking-tighter text-[#F2F2F2]"
            >
              Chris
              <br />
              Downs.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── Bio ───────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          <div className="pt-1">
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
              Profile
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#F2F2F2] leading-relaxed max-w-2xl">
              I&apos;m a product designer with a rare overlap — I design with
              genuine craft and build with real code. My work lives at the
              intersection of product strategy, interface design, and
              engineering.
            </p>
            <p className="text-[clamp(1rem,2vw,1.125rem)] text-[#6B6B6B] leading-relaxed max-w-2xl">
              Most designers hand off specs and wait. I stay through
              implementation — writing the code, making the tradeoffs, shipping
              the thing. That&apos;s not just a talking point; it&apos;s how I
              work on every project.
            </p>
            <p className="text-[clamp(1rem,2vw,1.125rem)] text-[#6B6B6B] leading-relaxed max-w-2xl">
              I&apos;ve worked across B2B SaaS, fintech, and consumer products —
              building design systems from scratch, taking 0-to-1 products
              through launch, and shipping side projects solo that people
              actually use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          <div className="pt-1">
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
              Capabilities
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12"
          >
            {skills.map((group) => (
              <div key={group.category}>
                <span className="font-mono text-xs text-[#C9A96E] tracking-[0.2em] uppercase block mb-6">
                  {group.category}
                </span>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-[#6B6B6B]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How I work ────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          <div className="pt-1">
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
              How I work
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 max-w-2xl"
          >
            {[
              {
                title: "Design with intent",
                body: "Every decision has a reason. I work from user problems and business goals, not aesthetic preference.",
              },
              {
                title: "Build to learn",
                body: "I prototype in code, not just Figma. It changes what you learn and what you ship.",
              },
              {
                title: "Ship, then iterate",
                body: "Perfect is the enemy of shipped. I bias toward putting things in front of real users as fast as possible.",
              },
              {
                title: "Own the outcome",
                body: "I track what ships and what it does. Design ends at impact, not delivery.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-[#F2F2F2] mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Resume ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          <div className="pt-1">
            <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase">
              Resume
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <p className="font-mono text-sm text-[#6B6B6B] max-w-md">
              Full work history, experience, and contact details — available on
              request or via download.
            </p>
            <a
              href="/resume.pdf"
              download
              className="shrink-0 text-sm font-medium text-[#F2F2F2] border border-[#F2F2F2] px-6 py-3 hover:bg-[#F2F2F2] hover:text-[#0A0A0A] transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-8"
          >
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#F2F2F2] max-w-lg leading-relaxed">
              Have a project or just want to talk shop?
            </p>
            <Link
              href="/contact"
              className="shrink-0 text-sm font-medium text-[#0A0A0A] bg-[#F2F2F2] px-8 py-4 hover:bg-[#C9A96E] transition-colors duration-200"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
