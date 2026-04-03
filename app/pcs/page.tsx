import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCS Cash Control",
  description:
    "Cash flow and operations stabilization for contractors and small operators. The bleeding is almost always in the timing, not the margin.",
};

const framework = [
  {
    id: "01",
    title: "7/14-Day Cash Visibility",
    body: "You cannot make good decisions without knowing where your money actually is — not your accounting balance, your real cash position. This starts with a 7-day visibility map, extended to 14 when needed. What's coming in, what's going out, and when.",
  },
  {
    id: "02",
    title: "Start / Pause / Hold",
    body: "Every obligation you carry gets classified: Start (initiate now), Pause (delay without penalty), or Hold (freeze until stability returns). This framework stops you from making spending decisions on inertia and forces intentional control.",
  },
  {
    id: "03",
    title: "Collections Discipline",
    body: "If money owed to you isn't coming in, you are funding the gap yourself. Collections discipline means identifying what's outstanding, when it's due, and what happens to your operation if it doesn't arrive on schedule.",
  },
  {
    id: "04",
    title: "Deposit Enforcement",
    body: "Contractors and operators often deliver services before receiving payment. Deposit enforcement structures your client agreements so you are not carrying projects — you are funded to execute them.",
  },
];

export default function PCSPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── INDUSTRIAL DARK HERO ──────────────────── */}
        <section className="border-b border-[#222] relative overflow-hidden bg-[#111]">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/images/desktop-point.webp"
              alt="Field operations"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-[#111]/40" />
          </div>
          {/* Grid texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b]">
              Contractor Cash Flow
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#f8f7f4] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              PCS Cash Control
            </h1>
            <p className="mt-6 text-lg text-[#888] max-w-xl leading-relaxed">
              Cash flow and operations stabilization for contractors and small
              operators. The bleeding is almost always in the timing, not the
              margin.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { stat: "7/14", label: "Day cash windows" },
                { stat: "3", label: "Decision modes" },
                { stat: "1", label: "Goal: stability" },
              ].map((s) => (
                <div key={s.label} className="border-t border-[#333] pt-4">
                  <p
                    className="text-3xl font-bold text-[#f8f7f4]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.stat}
                  </p>
                  <p className="text-xs text-[#666] mt-1 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PCS PHOTOS ────────────────────────────── */}
        <section className="border-b border-[#222] bg-[#111]">
          <div className="grid grid-cols-3 gap-px bg-[#222]">
            {["/images/pcs-1.webp", "/images/pcs-2.webp", "/images/pcs-3.webp"].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`Operations ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT THIS IS ──────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What This Is
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="space-y-4">
              <p
                className="text-lg font-medium text-[#1a1a1a] leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Decision control under pressure.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                7 and 14-day cash visibility. Start/Pause/Hold framework.
                Collections discipline. Deposit enforcement. Job-level truth.
                Not bookkeeping. Not taxes. Not marketing. The decisions that
                determine whether you make payroll Friday.
              </p>
              <div className="border border-[#e2e0db] p-6 mt-4 bg-[#f8f7f4]">
                <p className="text-sm font-bold text-[#0f0f0f] mb-3">
                  This is for you if:
                </p>
                {[
                  "You are a contractor or small operator running real revenue",
                  "You have active jobs that can't pause while you sort out cash",
                  "You've had profitable months and still couldn't make payroll",
                  "You want a structured approach instead of hoping things hold together",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 mb-2">
                    <span className="mt-1.5 w-1 h-1 bg-[#c0392b] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[#4a4a4a]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THIS IS NOT ──────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What This Is Not
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b] mb-8" />
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-6">
                Not a bookkeeper. Not an accountant. Not a business coach with
                a framework. This is operational cash control for contractors
                who are making real money and still can&apos;t figure out why the
                bank account never reflects it.
              </p>
              {[
                ["Not bookkeeping", "We don't categorize your transactions or maintain your books."],
                ["Not tax prep", "We don't touch your returns or filings."],
                ["Not financial planning", "We don't build long-term wealth strategies."],
                ["Not a retainer", "This is a sprint, not an ongoing relationship (unless you need it to be)."],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4 mb-5">
                  <span className="mt-0.5 text-[#ddd] font-bold text-lg leading-none">×</span>
                  <div>
                    <p className="text-sm font-bold text-[#0f0f0f]">{title}</p>
                    <p className="text-sm text-[#6b6b6b] mt-1">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What This Is
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b] mb-8" />
              {[
                ["Decision control", "A framework for making the right calls in a compressed, high-pressure window."],
                ["Cash visibility", "A real picture of your actual position — not accounting theory."],
                ["Operational discipline", "Tools to manage obligations, clients, and cash flow during disruption."],
                ["Speed", "Built for operators. Not a 90-day engagement."],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4 mb-5">
                  <span className="mt-0.5 text-[#c0392b] font-bold text-lg leading-none">✓</span>
                  <div>
                    <p className="text-sm font-bold text-[#0f0f0f]">{title}</p>
                    <p className="text-sm text-[#6b6b6b] mt-1">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE FRAMEWORK ─────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#111] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#666]">
                The Framework
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <h2
                className="mt-4 text-2xl md:text-3xl font-bold text-[#f8f7f4]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Four pillars. One goal: know your number before it knows you.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-[#222]">
              {framework.map((item) => (
                <div key={item.id} className="bg-[#111] p-8 flex flex-col gap-4">
                  <span className="text-xs font-bold text-[#c0392b] tracking-widest">
                    {item.id}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#f8f7f4]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#777] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#f8f7f4] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bleeding somewhere you can&apos;t find?
              </h2>
              <p className="text-[#888] text-base max-w-lg">
                Email with your situation. We&apos;ll tell you in 24 hours whether
                this is the right fit.
              </p>
            </div>
            <a
              href="mailto:ardoinconsulting@outlook.com?subject=PCS Cash Control"
              className="flex-shrink-0 bg-[#c0392b] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#a93226] transition-colors"
            >
              Get Started →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
