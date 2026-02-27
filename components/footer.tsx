import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] py-8 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#6B6B6B]">
          © {new Date().getFullYear()} Chris Downs
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="font-mono text-xs text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="font-mono text-xs text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs text-[#6B6B6B] hover:text-[#F2F2F2] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        <span className="font-mono text-xs text-[#6B6B6B]">
          Designed & built by Chris Downs
        </span>
      </div>
    </footer>
  );
}
