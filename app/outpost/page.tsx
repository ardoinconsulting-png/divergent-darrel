import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Outpost",
  description:
    "A community model built around land, fire, horses, gardens, and people coming together in a world that keeps pulling them apart.",
};

const elements = [
  { icon: "🐴", title: "Horseback Riding", body: "Animals that respond to who you actually are, not who you present. There is no faking it with a horse." },
  { icon: "🔥", title: "Fire & Outdoor Cooking", body: "Open fire. Cast iron. Slow meals with real people. The oldest form of community there is." },
  { icon: "🌱", title: "Gardens", body: "Growing food together changes how people relate to each other and to the land beneath them." },
  { icon: "🛖", title: "Creative Tiny Homes", body: "Intentional structures. Thoughtfully built. Space that reflects what a life of purpose actually looks like." },
  { icon: "🚣", title: "Kayaking", body: "Water. Movement. The kind of quiet that comes from being in nature and having nowhere else to be." },
  { icon: "🌿", title: "Trails & Nature", body: "Walk in. Leave something behind. The land does the work if you let it." },
  { icon: "🧖", title: "Sauna & Cold Plunge", body: "The discipline of heat and cold. Clarity through discomfort. A practice, not a amenity." },
  { icon: "🙏", title: "Spirituality & Ritual", body: "Not dogma. Not performance. The quiet practices that keep you anchored when everything else is moving." },
  { icon: "🧘", title: "Grounding & Meditation", body: "Stillness is a skill. The Outpost is designed to make it accessible — even for people who don't think they're built for it." },
  { icon: "🎉", title: "Community & Family Events", body: "Celebrations. Gatherings. People coming together across differences in a world that profits from keeping them apart." },
];

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
              Community Model
            </span>
            <h1
              className="mt-4 text-4xl md:text-6xl font-bold text-[#e8e4d8] leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Outpost
            </h1>
            <p className="mt-6 text-lg text-[#8a9070] max-w-xl leading-relaxed">
              A model for living and gathering that most people have never
              experienced — because nobody built it yet. Land, fire, horses,
              gardens, and people coming together in a world that keeps pulling
              them apart.
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
              alt="Horse at sunset — The Outpost"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* ── OUTPOST PHOTO GRID — 4 UP ─────────────── */}
        <section className="border-b border-[#2a3020] bg-[#161b11]">
          <div className="grid grid-cols-3 gap-px bg-[#2a3020]">
            {[
              "/images/outpost-1.webp",
              "/images/outpost-2.webp",
              "/images/outpost-3.webp",
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
                A model. Not just a place.
              </h2>
              <p className="text-base text-[#7a8060] leading-relaxed">
                The Outpost is not a retreat center. It is not a seminar venue.
                It is a working model for the kind of community most people
                quietly crave but have never seen built — one where land,
                animals, food, water, fire, and people are woven together into
                something that actually sustains you.
              </p>
              <p className="text-base text-[#7a8060] leading-relaxed">
                Creative tiny homes and intentional structures. Gardens that
                produce real food. Horses and horseback riding. Kayaking on
                open water. Trails that take you somewhere. A sauna and cold
                plunge for the people who understand what that discipline
                actually does. Fire circles for cooking, for gathering, for
                the conversations that only happen when screens are put away.
              </p>
              <p className="text-base text-[#7a8060] leading-relaxed">
                Spirituality and ritual — not as performance, but as practice.
                Grounding and meditation for people who have been moving so
                fast they forgot what still feels like. Family events.
                Community events. People coming together across every kind of
                difference in a world that profits from keeping them divided.
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

        {/* ── WHAT IT INCLUDES ──────────────────────── */}
        <section className="border-b border-[#2a3020] bg-[#161b11]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b7a4a]">
                What It Includes
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#6b7a4a]" />
              <h2
                className="mt-4 text-xl md:text-2xl font-bold text-[#e8e4d8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything that belongs together but rarely is.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a3020]">
              {elements.map((item) => (
                <div key={item.title} className="bg-[#1a1f14] p-7 flex flex-col gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <h3
                    className="text-base font-bold text-[#e8e4d8]"
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

        {/* ── THE MODEL ─────────────────────────────── */}
        <section className="border-b border-[#2a3020] bg-[#1a1f14]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#6b7a4a]">
                The Model
              </span>
              <div className="mt-2 w-8 h-0.5 bg-[#6b7a4a]" />
            </div>
            <div className="space-y-4">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#e8e4d8] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built to be replicated.
              </h2>
              <p className="text-base text-[#7a8060] leading-relaxed">
                This is not a one-location dream. The Outpost is a model —
                a blueprint for intentional community living that can be
                adapted, replicated, and scaled by anyone with the land, the
                vision, and the willingness to build something that puts people
                first.
              </p>
              <p className="text-base text-[#7a8060] leading-relaxed">
                Every element — the tiny homes, the gardens, the experiences,
                the gathering infrastructure — is designed with replication in
                mind. The goal is not one Outpost. The goal is a way of living
                that spreads because it works.
              </p>
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
                This doesn&apos;t build itself.
              </h2>
              <p className="text-base text-[#7a8060] leading-relaxed mb-4">
                Land, structures, infrastructure, animals, and experiences all
                cost real money. If this model resonates — if you believe
                people need something like this — there is a way to be part
                of making it real.
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                Every contribution goes directly toward building a physical
                place where this vision can be lived and shared.
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
                  Community land. Tiny homes. Gardens. Horses. Fire. Water.
                  The Outpost — a model worth building.
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
                  Want to follow this as it develops?
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
