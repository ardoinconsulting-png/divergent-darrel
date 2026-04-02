import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const navCards = [
  {
    tag: "Origin",
    title: "The Story",
    href: "/story",
    desc: "From a cane field in Raceland, Louisiana to the boardroom. 34 years of earning the right to say hard things.",
  },
  {
    tag: "Work With Me",
    title: "Advisory",
    href: "/advisory",
    desc: "Cash flow stabilization, fractional COO, and turnaround advisory. Not cheerleading — diagnosis and action.",
  },
  {
    tag: "Military Finance",
    title: "PCS Cash Control",
    href: "/pcs",
    desc: "Cash flow and operations stabilization for contractors navigating a move. Stop bleeding money on transitions.",
  },
  {
    tag: "Weekly Dispatch",
    title: "Cut of Clarity",
    href: "/newsletter",
    desc: "One issue a week. No filler. The signal most people are too polite to send.",
  },
  {
    tag: "Community",
    title: "The Outpost",
    href: "/outpost",
    desc: "Land, fire, horses, and people. A gathering place being built in Mississippi. Come find your footing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* ── HERO ─────────────────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <div className="inline-block mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b] border border-[#c0392b]/40 px-3 py-1">
                  No Filter. No Flinch.
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-[#0f0f0f] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                I specialize in people, patterns, and places —{" "}
                <em className="not-italic text-[#c0392b]">
                  and I deliver hard actionable truths
                </em>{" "}
                about all of them.
              </h1>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-10 max-w-lg">
                No position to protect. No feelings to manage. Just what&apos;s
                real and what to do next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/advisory"
                  className="bg-[#0f0f0f] text-[#f8f7f4] px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c0392b] transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/story"
                  className="border border-[#0f0f0f] text-[#0f0f0f] px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#0f0f0f] hover:text-[#f8f7f4] transition-colors"
                >
                  The Story
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#444]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30">
                    <rect x="3" y="3" width="18" height="18" rx="1"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#555] opacity-50">
                    Command Center Photo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c0392b]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c0392b]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO IS DARREL ────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                The Signal
              </span>
              <div className="mt-2 w-10 h-0.5 bg-[#c0392b]" />
            </div>
            <div>
              <p
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                34 years. Field to boardroom. Everything in between.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                Darrel Ardoin started in a cane field. He&apos;s operated as a
                tugboat deckhand, a sheriff, a Harley-Davidson specialist, an
                informant running inside outlaw motorcycle clubs, an oilfield
                snubbing operator, and a DWS supervisor before anyone handed
                him a title that looked good on a business card.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                He reads rooms. He spots dysfunction before the people causing
                it can see it. His brain is wired differently — not as a
                metaphor, as a fact — and that neurological difference is the
                actual product.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                When you bring him in, you get the version that isn&apos;t managing
                your feelings. You get what&apos;s true and what to do next.
              </p>
            </div>
          </div>
        </section>

        {/* ── NAV CARDS ────────────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-10">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Where to Go
              </span>
              <div className="mt-2 w-10 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e0db]">
              {navCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group bg-[#f8f7f4] hover:bg-white transition-colors p-8 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c0392b]">
                      {card.tag}
                    </span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      className="text-[#ccc] group-hover:text-[#0f0f0f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5"
                    >
                      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold text-[#0f0f0f] leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <div className="w-5 h-px bg-[#0f0f0f] group-hover:w-10 transition-all duration-300" />
                </Link>
              ))}
              {/* Dark CTA card */}
              <div className="bg-[#0f0f0f] p-8 flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c0392b]">
                  Free Weekly
                </span>
                <h3
                  className="text-xl font-bold text-[#f8f7f4]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Cut of Clarity
                </h3>
                <p className="text-sm text-[#888] leading-relaxed flex-1">
                  Every week. One sharp dispatch. No AI filler. No upsells.
                  Just signal from someone who&apos;s been in the rooms.
                </p>
                <a
                  href="https://cutofclarity.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c0392b] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 text-center hover:bg-[#a93226] transition-colors"
                >
                  Subscribe Free
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER EMBED ─────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                The Newsletter
              </span>
              <div className="mt-2 w-10 h-0.5 bg-[#c0392b] mb-6" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0f0f0f] leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Cut of Clarity
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-2">
                Every week, one dispatch. The kind of clarity that comes from
                34 years in environments where being wrong costs something real.
              </p>
              <p className="text-sm text-[#8a8a8a]">No fluff. Just signal.</p>
            </div>
            <div className="bg-[#f8f7f4] border border-[#e2e0db] p-8">
              <p className="text-sm font-bold text-[#0f0f0f] mb-1">
                Get the weekly dispatch.
              </p>
              <p className="text-xs text-[#8a8a8a] mb-6">
                Join readers who prefer signal over noise.
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
              <p className="text-xs text-[#aaa] mt-4">
                Or go direct:{" "}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
