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
      <section className="flex-1 px-6 md:px-12 pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          >
            {/* Left — Heading */}
            <div>
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
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tighter text-[#F2F2F2] mb-8"
              >
                Let&apos;s work
                <br />
                together.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-[clamp(1rem,2vw,1.125rem)] text-[#6B6B6B] leading-relaxed max-w-md"
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
              className="flex flex-col justify-end"
            >
              <span className="font-mono text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-8 block">
                Contact & Socials
              </span>

              <motion.ul
                variants={stagger}
                className="space-y-0 divide-y divide-[#1F1F1F]"
              >
                {socials.map((social) => (
                  <motion.li key={social.label} variants={fadeUp}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-5 text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200"
                    >
                      <span className="font-mono text-xs tracking-[0.15em] uppercase">
                        {social.label}
                      </span>
                      <span className="text-sm group-hover:text-[#C9A96E] transition-colors duration-200">
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
      <footer className="px-6 md:px-12 py-8 border-t border-[#1F1F1F]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#6B6B6B]">
            © {new Date().getFullYear()} Chris Downs
          </span>
          <span className="font-mono text-xs text-[#2A2A2A]">
            Designed & built by Chris Downs
          </span>
        </div>
      </footer>
    </main>
  );
}
