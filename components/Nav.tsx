import Link from "next/link";

const links = [
  { label: "Story", href: "/story" },
  { label: "Advisory", href: "/advisory" },
  { label: "PCS", href: "/pcs" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Outpost", href: "/outpost" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f7f4] border-b border-[#e2e0db]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[#0f0f0f] hover:text-[#c0392b] transition-colors">
          <span
            className="text-base font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Divergent<span className="text-[#c0392b]">Darrel</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.15em] uppercase font-semibold text-[#6b6b6b] hover:text-[#0f0f0f] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Mobile: just email CTA */}
        <a
          href="mailto:ardoinconsulting@outlook.com"
          className="md:hidden text-xs font-semibold tracking-wide uppercase text-[#c0392b]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
