import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCS Cash Control",
  description:
    "Cash flow and operations stabilization for contractors and small operators navigating a Permanent Change of Station.",
};

const framework = [
  {
    id: "01",
    title: "7/14-Day Cash Visibility",
    body: "You cannot make good decisions without knowing where your money actually is — not your accounting balance, your real cash position. PCS Cash Control starts with a 7-day visibility map, extended to 14 when needed. What's coming in, what's going out, and when.",
  },
  {
    id: "02",
    title: "Start / Pause / Hold",
    body: "Every obligation you carry during a move gets classified: Start (initiate now), Pause (delay without penalty), or Hold (freeze until stability returns). This framework stops you from making spending decisions on inertia and forces intentional control.",
  },
  {
    id: "03",
    title: "Collections Discipline",
    body: "If money owed to you isn't coming in during your move window, you are funding the gap yourself. Collections discipline means identifying what's outstanding, when it's due, and what happens to your operation if it doesn't arrive on schedule.",
  },
  {
    id: "04",
    title: "Deposit Enforcement",
    body: "Contractors and operators often deliver services before receiving payment. PCS amplifies this problem. Deposit enforcement structures your client agreements so you are not carrying projects — you are funded to execute them.",
  },
];

export default function PCSPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── INDUSTRIAL DARK HERO ──────────────── */}
        <section className="bg-[#111] border-b border-[#222] relative overflow-hidden">
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
              Operations Stabilization
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#f8f7f4] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              PCS Cash Control
            </h1>
            <p className="mt-6 text-lg text-[#888] max-w-xl leading-relaxed">
              This is not bookkeeping. This is not tax prep. This is decision
              control under pressure — for contractors and small operators who
              cannot afford to bleed money on a move.
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
                  <p className="text-xs text-[#666] mt-1 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ───────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                The Problem
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium text-[#1a1a1a] leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                A PCS move is a cash flow and operations stress event. Most contractors treat it like a logistics problem.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                When you move, revenue gets interrupted. Projects get delayed.
                Clients get unsettled. Expenses spike. And the decisions you
                make in the 30-to-60-day transition window either protect your
                business or cost you months of recovery time.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                PCS Cash Control is a structured approach to that window. It
                doesn&apos;t replace your accountant. It doesn&apos;t touch your taxes. It
                gives you decision-making tools for the period when your
                attention is split and your business is most exposed.
              </p>
              <div className="border border-[#e2e0db] p-6 mt-6 bg-[#f8f7f4]">
                <p className="text-sm font-bold text-[#0f0f0f] mb-3">
                  This is for you if:
                </p>
                {[
                  "You are a contractor or small operator facing a move",
                  "You have active clients or contracts that won't pause while you relocate",
                  "You've moved before and bled money in ways you couldn't fully explain",
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

        {/* ── THE FRAMEWORK ─────────────────────── */}
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
                Four pillars. One goal: stay solvent through the move.
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
                  <p className="text-sm text-[#777] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOT THIS ──────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What This Is Not
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b] mb-8" />
              {[
                ["Not bookkeeping", "We don&apos;t categorize your transactions or maintain your books."],
                ["Not tax prep", "We don&apos;t touch your returns or filings."],
                ["Not financial planning", "We don&apos;t build long-term wealth strategies."],
                ["Not a retainer", "This is a sprint, not an ongoing relationship (unless you need it to be)."],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4 mb-5">
                  <span className="mt-0.5 text-[#e2e0db] font-bold text-lg leading-none">×</span>
                  <div>
                    <p className="text-sm font-bold text-[#0f0f0f]" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-sm text-[#6b6b6b] mt-1" dangerouslySetInnerHTML={{ __html: body }} />
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
                ["Speed", "Built for the move window. Not a 90-day engagement."],
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

        {/* ── CTA ───────────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#f8f7f4] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Orders dropped. Now what?
              </h2>
              <p className="text-[#888] text-base max-w-lg">
                Email with your situation and timeline. We&apos;ll tell you if PCS
                Cash Control is the right fit.
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
