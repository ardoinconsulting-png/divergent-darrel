import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-[#222]">
          <div>
            <p
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Divergent<span className="text-[#c0392b]">Darrel</span>
            </p>
            <p className="text-sm text-[#777] leading-relaxed max-w-xs">
              People. Patterns. Places. The hard truths most people aren&apos;t
              equipped — or willing — to deliver.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#444] mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: "Story", href: "/story" },
                { label: "Advisory", href: "/advisory" },
                { label: "PCS Cash Control", href: "/pcs" },
                { label: "Newsletter", href: "/newsletter" },
                { label: "The Outpost", href: "/outpost" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#777] hover:text-[#f8f7f4] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#444] mb-4">
              Contact
            </p>
            <a
              href="mailto:ardoinconsulting@outlook.com"
              className="text-sm text-[#777] hover:text-[#f8f7f4] transition-colors block mb-3"
            >
              ardoinconsulting@outlook.com
            </a>
            <a
              href="https://cutofclarity.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#777] hover:text-[#f8f7f4] transition-colors block"
            >
              Cut of Clarity Newsletter
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#444]">
            © {new Date().getFullYear()} Darrel Ardoin. All rights reserved.
          </p>
          <p className="text-xs text-[#444]">DivergentDarrel.com</p>
        </div>
      </div>
    </footer>
  );
}
