import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Cash flow stabilization, fractional COO, and turnaround advisory. Starting at $3,000.",
};

const services = [
  {
    n: "01",
    name: "Cash Flow Stabilization Sprint",
    tagline: "7 days. 14 days. Maximum 30.",
    price: "$3,000",
    desc: "You have a cash flow problem. Not a bookkeeping problem — a decision and timing problem. This engagement maps your actual cash position, finds the bleeds, and gets you to stable ground fast. No retainer required to start seeing results.",
    deliverables: [
      "7/14-day cash visibility map",
      "Bleed identification and priority ranking",
      "Collections and deposit enforcement framework",
      "Start/Pause/Hold decision protocol",
      "One follow-up session",
    ],
  },
  {
    n: "02",
    name: "Fractional COO",
    tagline: "Ongoing. Embedded. Operational.",
    price: "$4,500/mo",
    desc: "You need someone in the chair — not a consultant who appears once and sends a report. This is embedded operational support: attending key meetings, reviewing decisions, identifying what's breaking before it costs you. Available to operators running $500K–$5M organizations navigating growth or instability.",
    deliverables: [
      "Weekly operations review",
      "Decision support on hires, contracts, and pivots",
      "Culture and people read",
      "Vendor and client relationship audit",
      "Direct access — no account manager filter",
    ],
  },
  {
    n: "03",
    name: "Turnaround Advisory",
    tagline: "When standard options are off the table.",
    price: "Scoped per engagement",
    desc: "For organizations that are in real trouble. Not the kind of trouble where a strategy deck helps — the kind where someone needs to walk in, understand what's actually happening in 48 hours, and tell you the truth about your options. Blunt. Fast. No softening.",
    deliverables: [
      "Rapid organizational assessment",
      "People and culture diagnostic",
      "Cash and operations stability audit",
      "Unfiltered findings report",
      "Prioritized action plan",
    ],
  },
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── DARK HERO WITH OIL-4 BACKGROUND ──────── */}
        <section className="relative border-b border-[#1f1f1f] bg-[#0f0f0f] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/oil-4.webp"
              alt="Field operations"
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/85 to-[#0f0f0f]/50" />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b]">
              Work With Me
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#f8f7f4] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advisory
            </h1>
            <p className="mt-6 text-lg text-[#888] max-w-xl leading-relaxed">
              You don&apos;t need a cheerleader. You need someone who will tell
              you exactly what&apos;s wrong and what to do about it.
            </p>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ───────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Who This Is For
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <div className="relative aspect-square overflow-hidden mt-8">
                <Image
                  src="/images/oil-5.webp"
                  alt="Field leadership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p
                className="text-lg font-medium text-[#1a1a1a] leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Leaders who are done with comfortable advice.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Operators, executives, owners, and field leaders who understand
                that the reason they&apos;re stuck isn&apos;t a lack of information —
                it&apos;s a lack of someone willing to name what&apos;s actually happening
                without protecting their own position in the process.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                If you want validation, I&apos;m the wrong call. If you want someone
                to walk into your situation with no agenda except accuracy —
                read it, name it, and tell you what to do — let&apos;s talk.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#e2e0db]">
                {[
                  "Small business operators",
                  "Oilfield and energy contractors",
                  "Executives in transition",
                  "Organizations in crisis",
                  "Founders who need a reality check",
                  "Anyone tired of being managed",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-[#c0392b] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#4a4a4a]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Services
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="space-y-px bg-[#e2e0db]">
              {services.map((svc) => (
                <div key={svc.name} className="bg-[#f8f7f4] p-8 md:p-10">
                  <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-[#c0392b] tracking-widest">
                          {svc.n}
                        </span>
                        <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#aaa]">
                          {svc.tagline}
                        </span>
                      </div>
                      <h3
                        className="text-2xl font-bold text-[#0f0f0f]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {svc.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span
                        className="text-2xl font-bold text-[#0f0f0f]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {svc.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-[#4a4a4a] leading-relaxed mb-6 max-w-2xl">
                    {svc.desc}
                  </p>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6b6b6b] mb-3">
                      Includes
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {svc.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-[#4a4a4a]"
                        >
                          <span className="mt-1.5 w-1 h-1 bg-[#c0392b] rounded-full flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FIT CALL CTA ──────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f8f7f4] leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a fit call.
              </h2>
              <p className="text-[#888] text-base leading-relaxed mb-2">
                Send a brief description of your situation. I&apos;ll tell you within
                24 hours whether I can help and which engagement makes sense.
              </p>
              <p className="text-sm text-[#555]">
                No sales process. No discovery call theater. Just a straight
                answer.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:ardoinconsulting@outlook.com?subject=Advisory Fit Call"
                className="bg-[#c0392b] text-white px-8 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a93226] transition-colors text-center"
              >
                Email to Book →
              </a>
              <p className="text-xs text-[#444] text-center">
                ardoinconsulting@outlook.com
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
