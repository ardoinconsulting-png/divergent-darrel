import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "From a cane field in Raceland, Louisiana to the boardroom. 34 years of earning the right to say hard things.",
};


const arc = [
  { role: "Tugboat Deckhand", detail: "The river. Before titles meant anything." },
  { role: "Sheriff's Office", detail: "Law enforcement. Learning how people behave when the stakes are real." },
  { role: "Harley-Davidson Specialist", detail: "The culture. The tribe. Earning trust from people who don't give it easily." },
  { role: "Outlaw Motorcycle Club Informant", detail: "Inside rooms most people never see. Reading intent under pressure." },
  { role: "Oilfield Snubbing Operator", detail: "Industrial environments. Precision where failure is catastrophic." },
  { role: "DWS Supervisor", detail: "Operations. Managing people in high-stakes environments." },
  { role: "Fractional Advisor", detail: "The distilled version of everything above — deployed where it's needed most." },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── DARK HERO ─────────────────────────── */}
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
            <p className="mt-6 text-lg text-[#888] max-w-xl leading-relaxed">
              From a cane field in Raceland, Louisiana to the boardroom. None of it was a straight line. All of it was earned.
            </p>
          </div>
        </section>

        {/* ── WHERE IT STARTS ───────────────────── */}
        <section className="border-b border-[#e2e0db] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="sticky top-20">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b6b6b]">
                Raceland, Louisiana
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#c0392b]" />
              <div className="relative aspect-[4/3] overflow-hidden my-8">
                <Image
                  src="/images/tiller-kid.webp"
                  alt="Young Darrel — Raceland, Louisiana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0f0f0f] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You can&apos;t fake where you started.
              </h2>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                Darrel Ardoin grew up in Raceland, Louisiana — deep in the
                bayou, deep in poverty, deep in the kind of circumstances
                that either break you or wire you in ways no classroom can
                replicate. He wasn&apos;t handed anything. He wasn&apos;t given a clear
                path. He was expelled. Twice.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                The cane fields were real. The absence of money was real. The
                reality that nobody was coming to explain how the world worked
                — that was real too. And that reality created something in him
                that a comfortable upbringing cannot manufacture: the ability
                to read a situation without flinching, and the willingness to
                say what he sees even when the room doesn&apos;t want to hear it.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                He learned early that most people are performing a version of
                reality rather than living in it. The gap between those two
                things — performance and truth — is where Darrel has operated
                for 34 years.
              </p>
              <blockquote className="border-l-2 border-[#c0392b] pl-5 mt-6">
                <p
                  className="text-lg font-medium text-[#0f0f0f] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;I didn&apos;t get a roadmap. I got expelled. Twice. What I got instead
                  was the ability to read rooms that other people think are walls.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── CAREER ARC ────────────────────────── */}
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
              {arc.map((item, i) => (
                <div key={item.role} className="bg-[#f8f7f4] px-8 py-6 grid grid-cols-[2.5rem_1fr_2fr] gap-6 items-center">
                  <span className="text-xs font-bold text-[#c0392b] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-sm font-bold text-[#0f0f0f]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEUROLOGICAL WIRING ───────────────── */}
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
                Darrel&apos;s brain is wired differently. Not as a self-help hook
                — as a neurological fact. The same wiring that made
                conventional schooling a poor fit is precisely what makes him
                dangerous in a room where something is wrong and everyone is
                pretending it isn&apos;t.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed mb-4">
                He processes patterns differently. He picks up on signals that
                others filter out as noise. He doesn&apos;t have the social
                conditioning that makes most people soften their read to avoid
                friction. The result: he sees what&apos;s actually there faster than
                most people, and he says it without requiring permission.
              </p>
              <p className="text-base text-[#4a4a4a] leading-relaxed">
                That is not a personality quirk. That is the product. If you
                want to understand why he&apos;s effective, start there.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shredded-yoga.webp"
                  alt="Darrel Ardoin — mind and body discipline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#0f0f0f] p-8 mt-2">
                <p
                  className="text-lg font-medium text-[#f8f7f4] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;The thing that got me expelled is the same thing that gets
                  me hired. Pattern recognition doesn&apos;t care about your approval.&rdquo;
                </p>
                <p className="mt-4 text-xs text-[#555]">— Darrel Ardoin</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────── */}
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
            <a
              href="/advisory"
              className="flex-shrink-0 bg-[#c0392b] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#a93226] transition-colors"
            >
              View Advisory
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
