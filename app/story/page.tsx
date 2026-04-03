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
            <div className="mt-8 border-l-2 border-[#c0392b]/40 pl-5">
              <p
                className="text-xl text-[#c8c4b4] font-medium leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;Shook a thousand hands. Lived a thousand lives.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── ORIGIN — RACELAND ─────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[5fr_7fr] gap-12 items-start">

            {/* Left: photo */}
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Raceland, Louisiana
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <div className="relative w-full mt-8 overflow-hidden h-80 md:h-[28rem]">
                <Image
                  src="/images/tiller-kid.webp"
                  alt="Young Darrel — Raceland, Louisiana"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="space-y-5 md:pt-12">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You can&apos;t fake where you started.
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Darrel Ardoin was raised inside a sugarcane field in Raceland,
                Louisiana. Extreme poverty. Domestic violence. A family involved
                in things that don&apos;t get discussed at school. He was expelled
                from Central Lafourche High School. Then from South Lafourche.
                He never went back. He didn&apos;t need to.
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
              <blockquote className="border-l-2 border-[#c0392b] pl-5 pt-1">
                <p
                  className="text-lg font-medium text-[#0f0f0f] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;I didn&apos;t get a roadmap. I got expelled. Twice. What I got
                  instead was the ability to read rooms that other people think
                  are walls.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── STORY PHOTOS — 2UP ────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-px bg-[#e2e0db]">
            {["/images/story-1.webp", "/images/story-2.webp"].map((src, i) => (
              <div key={i} className="relative overflow-hidden bg-[#1a1a1a] h-64 md:h-80">
                <Image
                  src={src}
                  alt={`Darrel Ardoin — ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 600px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── THE ARC — FLOWING NARRATIVE ───────────── */}
        <section className="border-b border-[#e2e0db] bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-10">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#888]">
                The Arc
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <h2
                className="mt-5 text-2xl md:text-3xl font-bold text-[#f8f7f4]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                34 years. Seven chapters. One thread.
              </h2>
            </div>

            <div className="max-w-3xl space-y-6">
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                The river. The badge. The Harley. The clubs. The rigs. Each one
                was a different school, and none of them handed out diplomas.
              </p>
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                He started on the water — tugboat work at night, the kind that
                happens in the dark, before anyone taught him what any of it was
                worth. From there into law enforcement, where he learned how
                human beings actually behave when the stakes are life and
                consequence — not how they present, how they <em>are</em>. He
                walked off the force and into a dealership the same day. Hired
                on the spot. Sold the most expensive unit on the floor his first
                month. The lesson landed early and never left: relationship and
                trust close more than pitch and pressure.
              </p>
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                Then the clubs. He rode with organizations that don&apos;t advertise
                their membership requirements. Learned firsthand how loyalty,
                hierarchy, and silence function inside the structures that never
                make the management books. Most leadership consultants have read
                about those environments. He lived in them.
              </p>
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                Heavy civil and maritime work followed — dragline cranes, spud
                barges, the kind of infrastructure labor that recalibrates your
                understanding of scale. Then snubbing found him.
                High-pressure well intervention: the discipline of working live
                wellbores under pressure — the wells other crews won&apos;t touch.{" "}
                <em className="not-italic text-[#f8f7f4] font-semibold">
                  &ldquo;Cowboys. If we showed up, there was a problem.&rdquo;
                </em>{" "}
                He rose from operator to field supervisor to completions
                consultant. Rewrote the hydraulic workover standard at his
                company. Became the person teams called when the standard
                playbook stopped working. Fourteen years of that.
              </p>
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                <em className="not-italic text-[#f8f7f4] font-semibold">
                  &ldquo;I helped build an operation from nine million to over two
                  hundred million. The day I left, they lost thirty million
                  dollars in annual revenue. If I could do it for them, I could
                  do it for myself and others.&rdquo;
                </em>
              </p>
              <p className="text-base md:text-lg text-[#c0bdb4] leading-relaxed">
                The integration that followed is not a pivot. It is the natural
                next chapter of someone who has shaken a thousand hands and
                lived a thousand lives — and is now deploying everything forged
                in all of them.
              </p>
            </div>
          </div>
        </section>

        {/* ── OILFIELD PHOTOS ───────────────────────── */}
        <section className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c0392b] mb-6">
              14 Years in the Field
            </p>

            {/* Top row — 3 up */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1f1f1f]">
              {/* oil-1: red snubbing unit — show full rig from top */}
              <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/oil-1.webp"
                  alt="Snubbing unit"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              {/* oil-2: Red Adair gear — keep as is */}
              <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/oil-2.webp"
                  alt="Well intervention gear"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              {/* oil-3: blue sky rig — show full picture from top */}
              <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/oil-3.webp"
                  alt="Rig against blue sky"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Middle row — 2 up */}
            <div className="grid grid-cols-2 gap-px bg-[#1f1f1f] mt-px">
              {/* oil-4: command center with screens — center on face */}
              <div className="relative overflow-hidden bg-[#111] h-72 md:h-80">
                <Image
                  src="/images/oil-4.webp"
                  alt="Command center"
                  fill
                  sizes="50vw"
                  className="object-contain"
                />
              </div>
              {/* oil-5: field closeup face — pull focus to face */}
              <div className="relative overflow-hidden bg-[#111] h-72 md:h-80">
                <Image
                  src="/images/oil-5.webp"
                  alt="Field operations — face"
                  fill
                  sizes="50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY PHOTOS — 2UP ────────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-px bg-[#e2e0db]">
            {/* story-3: chainsaw — full frame center */}
            <div className="relative overflow-hidden bg-[#1a1a1a] h-64 md:h-80">
              <Image
                src="/images/story-3.webp"
                alt="Darrel Ardoin"
                fill
                sizes="(max-width: 768px) 50vw, 600px"
                className="object-contain"
              />
            </div>
            {/* story-4: kneeling in uniform — full frame center */}
            <div className="relative overflow-hidden bg-[#1a1a1a] h-64 md:h-80">
              <Image
                src="/images/story-4.webp"
                alt="Darrel Ardoin"
                fill
                sizes="(max-width: 768px) 50vw, 600px"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* ── WHAT HE BUILT ─────────────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                What He Built
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
            </div>
            <div className="space-y-5">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Operators build. Advisors advise. He does both.
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Before the advisory work crystallized, Darrel built. Ardoin
                Consulting Solutions — his consulting entity, through which he
                has worked directly with operators, contractors, and small
                business owners navigating cash flow, operations, and decisions
                that don&apos;t appear in any framework. A salon — built, staffed,
                and run. A JV contractor network assembled on relationships and
                trust rather than contracts and org charts.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                None of these were built from a position of comfort or capital.
                They were built by someone who had operated in high-stakes
                environments long enough to understand that the difference
                between an operator who makes it and one who doesn&apos;t is almost
                never the size of their opportunity. It is how they handle cash,
                people, and pressure simultaneously.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                What lights him up now is integrating into other people&apos;s
                systems — walking into an operation, reading what&apos;s actually
                happening, and delivering the perspective they couldn&apos;t see from
                the inside. That capability is built from having done the work
                at every level — not from observing it. He adapts to the
                environment fast because he has operated in all of them.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEUROLOGICAL WIRING ───────────────────── */}
        <section className="border-b border-[#e2e0db]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start">
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
                A highly neurodivergent mind forged by a lifetime of chosen and
                environmental pressure — built for rapid, weighted decisions
                with uncommon precision. The same wiring that made conventional
                schooling a poor fit made him exceptional in environments that
                require pattern recognition at speed, tolerance for chaos, and
                the ability to hold multiple high-stakes variables
                simultaneously without flinching.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                He processes signal that other people filter as noise. He
                doesn&apos;t carry the social conditioning that makes most advisors
                soften their read to avoid friction. He sees it faster. He says
                it plainly. He doesn&apos;t need your approval to tell you the truth.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-6">
                That is not a personality trait. That is the product.
              </p>
              <blockquote className="border-l-2 border-[#c0392b] pl-5">
                <p
                  className="text-lg font-medium text-[#0f0f0f] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;Robots don&apos;t take risk. AI doesn&apos;t take risk either. That&apos;s the
                  human competitive advantage — being able to integrate fear and
                  feelings into decision, not just logic.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#8a8a8a]">— Darrel Ardoin</p>
              </blockquote>
            </div>

            <div className="space-y-2">
              <div className="relative overflow-hidden bg-[#1a1a1a]" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/preview.webp"
                  alt="Darrel Ardoin"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="bg-[#0f0f0f] p-8">
                <p
                  className="text-base font-medium text-[#f8f7f4] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;There&apos;s no reality where you don&apos;t have hard times ahead of
                  you. But having that fire inside of you, having that faith —
                  that&apos;s what carries you past motivation and into discipline.&rdquo;
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
