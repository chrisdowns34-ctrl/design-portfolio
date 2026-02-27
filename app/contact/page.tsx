"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Email", href: "mailto:hello@chrisdowns.co", display: "hello@chrisdowns.co" },
  { label: "GitHub", href: "https://github.com", display: "github.com/chrisdowns" },
  { label: "LinkedIn", href: "https://linkedin.com", display: "linkedin.com/in/chrisdowns" },
  { label: "Twitter / X", href: "https://twitter.com", display: "@chrisdowns" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* ── Main content ──────────────────────────────────── */}
      <section className="flex-1 px-6 md:px-12 pt-36 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left — Heading */}
            <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-8 md:p-12">
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-8 block"
              >
                Contact
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tighter text-[#F2F2F2] mb-8"
              >
                Let&apos;s work
                <br />
                together.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-[clamp(1rem,2vw,1.125rem)] text-[#6B6B6B] leading-relaxed"
              >
                I&apos;m open to freelance projects, full-time opportunities,
                and interesting conversations. If you have something in mind,
                I&apos;d love to hear it.
              </motion.p>
            </div>

            {/* Right — Links */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-8 md:p-12 flex flex-col justify-between"
            >
              <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-8 block">
                Contact & Socials
              </span>

              <motion.ul variants={stagger} className="flex flex-col gap-1">
                {socials.map((social) => (
                  <motion.li key={social.label} variants={fadeUp}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-4 py-4 rounded-xl text-[#6B6B6B] hover:text-[#F2F2F2] hover:bg-[#141414] transition-all duration-200"
                    >
                      <span className="font-mono text-xs tracking-[0.15em] uppercase">
                        {social.label}
                      </span>
                      <span className="text-sm group-hover:text-[#5B83F5] transition-colors duration-200">
                        {social.display}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 pb-8 pt-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs text-[#6B6B6B]">
              © {new Date().getFullYear()} Chris Downs
            </span>
            <span className="font-mono text-xs text-[#2A2A2A]">
              Designed & built by Chris Downs
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
