"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 bg-[#111111]/80 backdrop-blur-xl border border-[#272727] rounded-full px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
        {/* Logo pill */}
        <Link
          href="/"
          className="font-mono text-xs text-[#F2F2F2] hover:text-[#C9A96E] transition-colors duration-200 tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
        >
          CD
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-[#272727] mx-1" />

        {/* Nav links */}
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-[#F2F2F2] text-[#0A0A0A] font-medium"
                  : "text-[#6B6B6B] hover:text-[#F2F2F2] hover:bg-[#1A1A1A]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
