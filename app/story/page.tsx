import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "From a sugarcane field in Raceland, Louisiana to 14 years in high-pressure well intervention. None of it was a straight line. All of it left a mark.",
};

const arc = [
  {
    n: "01",
    role: "Tugboat Deckhand",
    detail:
      "The river at night. Manual labor before anyone handed you anything. Learning what real work feels like before you know what it's worth.",
  },
  {
    n: "02",
    role: "Lafourche Parish Sheriff's Deputy",
    detail:
      "Law enforcement. Interrogation. Negotiation under real pressure. Learning how human behavior actually works when the stakes are life and consequence — not performance reviews.",
  },
  {
    n: "03",
    role: "Harley-Davidson",
    detail:
      "Walked off the force and into a Harley-Davidson dealership the same day. Hired on the spot. Sold the most expensive bike on the floor his first month. The lesson: relationship and trust close more than pitch and pressure.",
  },
  {
    n: "04",
    role: "Outlaw Motorcycle Clubs",
    detail:
      "Rode with clubs that don't advertise their membership requirements. Learned how organizations built on loyalty, hierarchy, and silence actually function. Most leadership consultants have read about this. He lived it.",
  },
  {
    n: "05",
    role: "Heavy Civil and Maritime",
    detail:
      "Dragline crane operations. Tugboats and spud barges. The kind of physical infrastructure work that reminds you what scale actually means.",
  },
  {
    n: "06",
    role: "High-Pressure Well Intervention & Snubbing",
    detail:
      "14 years. Snubbing is the discipline of working live wellbores under pressure — the wells other crews won't touch. He rose from operator to field supervisor to completions consultant. Nicknamed The Author for rewriting the hydraulic workover standard at his company. His departure cost the company over $30M in annual customer revenue. 2023 W-2: $209,627.",
    highlight: true,
  },
  {
    n: "07",
    role: "Fractional Strategic Advisor",
    detail:
      "Everything above, distilled and deployed. He walks into businesses, operations, and leadership teams the way he walked onto well sites — fresh eyes, no agenda, no position to protect. He reads what's actually happening and tells you the truth about it. That is the product.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── DARK HERO ─────────────────────────────── */}
        <section className="bg-[#0f0f0f] border-b border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b]">
              Origin
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#f8f7f4] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Story
            </h1>
            <p className="mt-6 text-lg text-[#888] max-w-2xl leading-relaxed">
              From a sugarcane field in Raceland, Louisiana to 14 years in
              high-pressure well intervention. None of it was a straight line.
              All of it left a mark.
            </p>
          </div>
        </section>

        {/* ── ORIGIN — WHERE IT STARTS ──────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Left: label + photo */}
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Raceland, Louisiana
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image
                  src="/images/tiller-kid.webp"
                  alt="Young Darrel — Raceland, Louisiana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="space-y-5 md:pt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You can&apos;t fake where you started.
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Darrel Ardoin was born into a sugarcane field in Raceland,
                Louisiana. Extreme poverty. Domestic violence. A family involved
                in things that don&apos;t get discussed at school. He was expelled
                from Central Lafourche High School. Then from South Lafourche.
                He never went back.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Most people would call that a rough start. He calls it the
                education that actually mattered.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                What the cane field teaches you that no classroom will: how to
                read the room when the room is dangerous. How to assess a
                situation without the luxury of being wrong. How to hold your
                ground when nothing around you is stable. These are not soft
                skills. They are survival skills — and they translate directly
                into every professional environment he has operated in since.
              </p>
              <blockquote className="border-l-2 border-[#c0392b] pl-5 mt-6">
                <p
                  className="text-lg font-medium text-[#0f0f0f] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;I didn&apos;t get a roadmap. I got expelled. Twice. What I got
                  instead was the ability to read rooms that other people think
                  are walls.&rdquo;
                </p>
              </blockquote>

              {/* Story photos grid */}
              <div className="grid grid-cols-2 gap-2 pt-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/story-1.webp" alt="Darrel Ardoin" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/story-2.webp" alt="Darrel Ardoin" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY PHOTOS — ADDITIONAL ─────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="grid grid-cols-3 gap-px bg-[#1f1f1f]">
            {["/images/story-3.webp", "/images/story-4.webp", "/images/story-5.webp"].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`Darrel Ardoin — ${i + 3}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── CAREER ARC ────────────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                The Arc
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <h2
                className="mt-4 text-2xl md:text-3xl font-bold text-[#0f0f0f]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                34 years. Seven sectors. One thread.
              </h2>
            </div>
            <div className="space-y-px bg-[#e2e0db]">
              {arc.map((item) => (
                <div
                  key={item.n}
                  className={`px-8 py-7 grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_2fr] gap-x-6 gap-y-2 items-start ${item.highlight ? "bg-[#0f0f0f]" : "bg-[#f8f7f4]"}`}
                >
                  <span className={`text-xs font-bold tracking-widest pt-0.5 ${item.highlight ? "text-[#c0392b]" : "text-[#c0392b]"}`}>
                    {item.n}
                  </span>
                  <h3
                    className={`text-sm font-bold ${item.highlight ? "text-[#f8f7f4]" : "text-[#0f0f0f]"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.role}
                    {item.highlight && (
                      <span className="ml-3 text-[9px] tracking-[0.15em] uppercase font-bold text-[#c0392b] border border-[#c0392b]/40 px-2 py-0.5 align-middle">
                        14 Years
                      </span>
                    )}
                  </h3>
                  <p className={`text-sm leading-relaxed col-start-2 md:col-start-3 ${item.highlight ? "text-[#888]" : "text-[#6b6b6b]"}`}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OILFIELD SECTION ──────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="mb-8">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b]">
                14 Years in the Field
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <h2
                className="mt-4 text-xl md:text-2xl font-bold text-[#f8f7f4]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                High-Pressure Well Intervention & Snubbing Operations
              </h2>
            </div>
            {/* 3-up photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1f1f1f] mb-px">
              {["/images/oil-1.webp", "/images/oil-2.webp", "/images/oil-3.webp"].map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden">
                  <Image src={src} alt={`Oilfield operations ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1f1f1f]">
              {["/images/oil-4.webp", "/images/oil-6.webp"].map((src, i) => (
                <div key={i} className="relative aspect-[16/9] overflow-hidden">
                  <Image src={src} alt={`Oilfield operations ${i + 4}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEUROLOGICAL WIRING ───────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Neurological Wiring
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b] mb-8" />
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This isn&apos;t a metaphor. It&apos;s how the brain actually works.
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                Darrel&apos;s brain is wired differently. Not as a hook — as a
                documented neurological fact. ADHD. Likely spectrum overlap.
                CPTSD from early childhood. The same wiring that made him a
                poor fit for conventional schooling made him exceptional in
                environments that require rapid pattern recognition, tolerance
                for chaos, and the ability to hold multiple complex variables
                simultaneously without flinching.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                He processes signal that other people filter as noise. He
                doesn&apos;t carry the social conditioning that makes most advisors
                soften their read to avoid friction. He sees it faster. He says
                it plainly. He doesn&apos;t need your approval to tell you the truth.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                That is not a personality trait. That is the product.
              </p>
            </div>
            <div className="space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shredded-yoga.webp"
                  alt="Darrel Ardoin — mind and body discipline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#0f0f0f] p-8">
                <p
                  className="text-lg font-medium text-[#f8f7f4] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;The thing that got me expelled is the same thing that gets
                  me hired. Pattern recognition doesn&apos;t care about your
                  approval.&rdquo;
                </p>
                <p className="mt-4 text-xs text-[#555]">— Darrel Ardoin</p>
              </div>
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
                Ready to work with someone who&apos;s been in the field?
              </h2>
              <p className="text-[#888] text-base max-w-lg">
                The story informs the work. See what that work looks like.
              </p>
            </div>
            <Link
              href="/advisory"
              className="flex-shrink-0 bg-[#c0392b] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#a93226] transition-colors"
            >
              View Advisory
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
