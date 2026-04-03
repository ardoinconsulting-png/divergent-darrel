import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Outpost",
  description:
    "Land, horses, fire, and people. A gathering place being built in Mississippi.",
};

export default function OutpostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">

        {/* ── EARTHY DARK HERO ──────────────────────── */}
        <section className="relative border-b border-[#2a3020] bg-[#1a1f14] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #8a9a70 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8a9a60]">
              Fire Gathering
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#e8e4d8] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Outpost
            </h1>
            <p className="mt-6 text-lg text-[#8a9070] max-w-xl leading-relaxed">
              Land, horses, fire, and people. A gathering place being built in
              Mississippi. Thirty acres. Real ground. Come find your footing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://gofundme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6b7a4a] text-[#e8e4d8] px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#7a8a58] transition-colors"
              >
                Support the Vision
              </a>
              <a
                href="#vision"
                className="border border-[#3a4a2a] text-[#8a9070] px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase hover:border-[#6b7a4a] hover:text-[#e8e4d8] transition-colors"
              >
                Read the Vision
              </a>
            </div>
          </div>
        </section>

        {/* ── HERO PHOTO — HORSE SUNSET ─────────────── */}
        <section className="border-b border-[#2a3020] bg-[#1a1f14]">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/horse-sunset.webp"
              alt="Horse at sunset — The Outpost, Mississippi"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* ── OUTPOST PHOTO GRID — 4 UP ─────────────── */}
        <section className="border-b border-[#2a3020] bg-[#161b11]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a3020]">
            {[
              "/images/outpost-1.webp",
              "/images/outpost-2.webp",
              "/images/outpost-3.webp",
              "/images/outpost-4.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`The Outpost ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── THE VISION ────────────────────────────── */}
        <section id="vision" className="border-b border-[#2a3020] bg-[#1a1f14]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b7a4a]">
                The Vision
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#6b7a4a]" />
            </div>
            <div className="space-y-5">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#e8e4d8] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thirty acres in Mississippi. Fire in the center. People around
                it.
              </h2>
              <p className="text-base text-[#7a8060] leading-relaxed">
                The Outpost is a vision that has been taking shape for years.
                Thirty acres of land in Mississippi. Space for horses. A fire
                circle at the center. People who need to get out of their own
                heads and back into something real.
              </p>
              <p className="text-base text-[#7a8060] leading-relaxed">
                This is not a retreat center. This is not a seminar. There are
                no projector screens or breakout sessions. There is land. There
                are animals. There is fire. There are people who have the
                courage to sit still long enough to hear what they actually
                think.
              </p>
              <p className="text-base text-[#7a8060] leading-relaxed">
                The modern world is very good at keeping you busy. The Outpost
                exists to provide the opposite of that — a place where the
                noise stops and you have to reckon with what&apos;s actually true.
              </p>
              <blockquote className="border-l-2 border-[#6b7a4a] pl-5 mt-6">
                <p
                  className="text-lg font-medium text-[#c8c4a8] leading-relaxed"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;Land doesn&apos;t lie. Animals don&apos;t manage your feelings. Fire
                  doesn&apos;t care about your title. That&apos;s the whole point.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#555]">— Darrel Ardoin</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── WHAT IT IS — 4 PILLARS ────────────────── */}
        <section className="border-b border-[#2a3020] bg-[#161b11]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b7a4a]">
                What It Is
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#6b7a4a]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a3020]">
              {[
                {
                  icon: "🌾",
                  title: "Land",
                  body: "Thirty acres of working land in Mississippi. Real ground. Not manicured. Not curated. Real.",
                },
                {
                  icon: "🐴",
                  title: "Horses",
                  body: "Animals that respond to what you actually are, not what you present. There is no faking it with a horse.",
                },
                {
                  icon: "🔥",
                  title: "Fire",
                  body: "The oldest gathering tool on earth. When you sit around a fire long enough, something honest eventually comes out.",
                },
                {
                  icon: "👥",
                  title: "People",
                  body: "Small groups. Intentional. People who are serious about getting grounded — not performing getting grounded.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1a1f14] p-8 flex flex-col gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3
                    className="text-lg font-bold text-[#e8e4d8]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b7060] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── GOFUNDME CTA ──────────────────────────── */}
        <section className="border-b border-[#2a3020] bg-[#1a1f14]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b7a4a]">
                Support the Build
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#6b7a4a] mb-6" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[#e8e4d8] leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This place doesn&apos;t build itself.
              </h2>
              <p className="text-base text-[#7a8060] leading-relaxed mb-4">
                Land costs money. Fencing costs money. Infrastructure costs
                money. If this vision resonates — if you believe that people
                need places like this — there&apos;s a way to be part of making it
                real.
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                Every contribution goes directly toward building a physical
                space where people can get grounded. No overhead. No
                organization. Just land, animals, fire, and the people who
                show up to use them.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-[#3a4a2a] p-8 bg-[#161b11]">
                <p
                  className="text-lg font-bold text-[#e8e4d8] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  GoFundMe Campaign
                </p>
                <p className="text-sm text-[#6b7060] leading-relaxed mb-6">
                  30 acres in Mississippi. Horses. Fire pit. Community space.
                  The Outpost — coming 2025.
                </p>
                <a
                  href="https://gofundme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#6b7a4a] text-[#e8e4d8] px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#7a8a58] transition-colors text-center"
                >
                  Donate on GoFundMe →
                </a>
                <p className="text-xs text-[#444] mt-3 text-center">
                  Link will be updated when campaign launches
                </p>
              </div>
              <div className="border border-[#3a4a2a] p-6 bg-[#161b11]">
                <p className="text-sm text-[#6b7060] mb-3">
                  Want to stay informed as this develops?
                </p>
                <a
                  href="https://cutofclarity.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#8a9a60] hover:text-[#e8e4d8] transition-colors"
                >
                  Subscribe to Cut of Clarity →
                </a>
                <p className="text-xs text-[#444] mt-1">
                  Outpost updates ship in the newsletter
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Earthy footer */}
      <footer className="bg-[#111610] text-[#e8e4d8] border-t border-[#2a3020]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Divergent<span className="text-[#8a9a60]">Darrel</span>
          </p>
          <p className="text-xs text-[#444]">
            © {new Date().getFullYear()} Darrel Ardoin
          </p>
          <a
            href="mailto:ardoinconsulting@outlook.com"
            className="text-xs text-[#555] hover:text-[#e8e4d8] transition-colors"
          >
            ardoinconsulting@outlook.com
          </a>
        </div>
      </footer>
    </div>
  );
}
