import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cut of Clarity — Newsletter",
  description:
    "Weekly dispatch. No filler. The signal most people are too polite to send.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── CLEAN EDITORIAL HERO ──────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b]">
                Weekly Dispatch
              </span>
              <h1
                className="mt-4 text-5xl md:text-7xl font-bold text-[#0f0f0f] leading-[0.95] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Cut of<br />Clarity.
              </h1>
              <p className="mt-6 text-lg text-[#4a4a4a] leading-relaxed max-w-md">
                One issue a week. No AI filler. No sponsored content. No takes
                softened to protect anyone&apos;s feelings. Just Darrel, writing
                about what he actually sees.
              </p>
              <div className="mt-8 flex items-center gap-6 text-sm text-[#8a8a8a]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" />
                  Weekly
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" />
                  Free
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" />
                  Unfiltered
                </div>
              </div>
            </div>
            <div className="bg-[#f8f7f4] border border-[#e2e0db] p-10">
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Subscribe — it&apos;s free.
              </h2>
              <p className="text-sm text-[#6b6b6b] mb-8 leading-relaxed">
                Join readers who want what&apos;s true, not what&apos;s comfortable.
              </p>
              <iframe
                src="https://embeds.beehiiv.com/cutofclarity?slim=true"
                data-test-id="beehiiv-embed"
                width="100%"
                height="52"
                frameBorder="0"
                scrolling="no"
                style={{ margin: 0, padding: 0 }}
                title="Cut of Clarity Newsletter"
              />
              <div className="mt-6 pt-6 border-t border-[#e2e0db]">
                <p className="text-xs text-[#8a8a8a] mb-1">No spam. Unsubscribe any time.</p>
                <p className="text-xs text-[#aaa]">
                  Or visit:{" "}
                  <a
                    href="https://cutofclarity.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#0f0f0f] transition-colors"
                  >
                    cutofclarity.beehiiv.com →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What to Expect
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { tag: "Leadership", body: "What breaks it, what holds it together, and what people are afraid to name." },
                { tag: "Cash & Operations", body: "Practical takes on business health, cash flow, and decision-making under pressure." },
                { tag: "Military Life", body: "PCS finance, transition strategy, and the gaps nobody briefs you on." },
                { tag: "Pattern Recognition", body: "Culture reads. People reads. The signals that most people miss because they're too close." },
              ].map((item) => (
                <div key={item.tag} className="border-t border-[#e2e0db] pt-5">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c0392b] mb-2">
                    {item.tag}
                  </p>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISSUE 001 TEASER ──────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                First Issue
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="border border-[#e2e0db] bg-[#f8f7f4]">
              {/* Issue header */}
              <div className="border-b border-[#e2e0db] px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="text-sm font-bold text-[#0f0f0f]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Cut of Clarity
                  </span>
                  <span className="text-[10px] font-bold text-[#c0392b] border border-[#c0392b]/30 px-2 py-0.5">
                    ISSUE 001
                  </span>
                </div>
                <span className="text-xs text-[#8a8a8a]">Coming Soon</span>
              </div>
              <div className="px-8 py-10 md:px-14 md:py-12 max-w-2xl">
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The Rooms Nobody Wants to Be Honest In
                </h3>
                <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                  Every organization has rooms where the truth is known but
                  not spoken. Conference rooms. Staff meetings. Performance
                  reviews. The gap between what everyone knows and what anyone
                  actually says is where dysfunction lives.
                </p>
                <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                  In Issue 001, I&apos;m writing about what I&apos;ve seen in 34 years of
                  walking into those rooms: how to read them, what to do in
                  them, and why most people leave them worse off than when
                  they entered.
                </p>
                <p className="text-base text-[#4a4a4a] leading-relaxed mb-8">
                  Subscribe before it drops.
                </p>
                <a
                  href="https://cutofclarity.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0f0f0f] text-[#f8f7f4] px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c0392b] transition-colors"
                >
                  Subscribe Free →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
