"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const EASE = [0.32, 0.72, 0, 1] as const;
const DURATION = 0.55;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? 20 : 0,
        paddingLeft: scrolled ? 16 : 0,
        paddingRight: scrolled ? 16 : 0,
      }}
      transition={{ duration: DURATION, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <motion.nav
        animate={{
          maxWidth: scrolled ? 520 : 1400,
          borderRadius: scrolled ? 9999 : 0,
          height: scrolled ? 48 : 64,
          paddingLeft: scrolled ? 8 : 48,
          paddingRight: scrolled ? 8 : 48,
          backgroundColor: scrolled
            ? "rgba(17,17,17,0.85)"
            : "rgba(17,17,17,0)",
          borderColor: scrolled
            ? "rgba(39,39,39,1)"
            : "rgba(39,39,39,0)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.5)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: DURATION, ease: EASE }}
        className="relative w-full flex items-center justify-between overflow-hidden"
        style={{ borderWidth: 1, borderStyle: "solid" }}
      >
        {/* Backdrop blur layer — fades in separately */}
        <motion.div
          className="absolute inset-0 -z-10 backdrop-blur-xl"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        />

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xs text-[#F2F2F2] hover:text-[#C9A96E] transition-colors duration-200 tracking-[0.2em] uppercase px-2 py-1 rounded-full shrink-0"
        >
          CD
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-all duration-200 px-4 py-1.5 rounded-full ${
                    isActive && scrolled
                      ? "bg-[#F2F2F2] text-[#0A0A0A] font-medium"
                      : isActive
                      ? "text-[#F2F2F2]"
                      : "text-[#6B6B6B] hover:text-[#F2F2F2] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
