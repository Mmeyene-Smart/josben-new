import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PROGRAMS, SITE } from "@/lib/site";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-500">
              Uyo · Akwa Ibom · UK Pathways
            </p>
            <h1 className="mt-4 font-serif-display text-3xl font-bold leading-tight sm:text-5xl">
              Your home of excellence in professional & academic tutoring
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              JOSBEN International Business School — CIBN-accredited banking training,
              ICAN / ACCA coaching, undergraduate & postgraduate routes, and an
              International Access Programme with articulation to the University of Roehampton, London.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/admissions" className="rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 hover:bg-gold-600">
                Apply Now
              </Link>
              <Link href="/programmes" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold hover:bg-white/10">
                Explore Programmes
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
              <span>✓ Only CIBN-accredited centre in Akwa Ibom</span>
              <span>✓ NCC Education curriculum (UK)</span>
              <span>✓ Affordable fees + scholarships</span>
            </div>
          </div>
          <div className="grid content-center gap-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { k: "10+", v: "Years training bankers & professionals" },
                { k: "100s", v: "Graduates in global corporate roles" },
                { k: "UK", v: "Roehampton articulation + NCC routes" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-white/10 p-4 text-center">
                  <p className="font-serif-display text-2xl font-bold text-gold-500">{s.k}</p>
                  <p className="mt-1 text-xs text-slate-200">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-white p-5 text-sm text-slate-700">
              <p className="font-bold text-navy-900">Opening hours</p>
              {SITE.hours.map((h) => <p key={h} className="text-xs">{h}</p>)}
              <p className="mt-2 text-xs">Visit: {SITE.address}</p>
              <p className="text-xs"><a className="font-bold text-navy-800" href={SITE.phoneHref}>{SITE.phone}</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="What we offer" title="Programmes for every ambition" sub="Same menu as josbenibs.com — reorganised for clarity." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.slice(0, 6).map((p) => (
            <Link key={p.slug} href={`/programmes/${p.slug}`} className="group rounded-2xl border p-5 hover:border-navy-800 hover:shadow-md">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-600">{p.category}</p>
              <h3 className="mt-1 font-serif-display text-lg font-bold text-navy-900 group-hover:underline">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              <p className="mt-3 text-xs font-semibold text-navy-800">Learn more →</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/programmes" className="rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800">View all programmes</Link>
        </div>
      </section>

      {/* Why JOSBEN */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading eyebrow="Why JOSBEN" title="A pacesetter in the AKWACROSS region" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "CIBN Accredited", d: "The only higher institution in Akwa Ibom accredited by CIBN for banking & finance training." },
              { t: "UK Articulation", d: "Signed articulation with University of Roehampton, London + JOSBEN International College UK." },
              { t: "Seasoned Faculty", d: "Industry veterans blending theory with practical, exam-focused coaching." },
              { t: "Affordable + Scholarships", d: "Fees for the average Nigerian + bursaries for disabled, poor-background & excellent students." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-serif-display font-bold text-navy-900">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIET values */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading eyebrow="Our values — DIET" title="Diversity · Innovation · Excellence · Trust" sub="To produce highly skilled graduates that make a difference today and in the future." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Diversity", "Valuing people from different backgrounds, cultures and perspectives."],
            ["Innovation", "The driving force behind growth in a rapidly evolving world."],
            ["Excellence", "Highest standards in teaching, service and student outcomes."],
            ["Trust", "Cornerstone of strong relationships and collaboration."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border-t-4 border-gold-500 bg-white p-5 shadow-sm">
              <p className="font-serif-display text-lg font-bold text-navy-900">{t}</p>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center">
          <h2 className="font-serif-display text-2xl font-bold sm:text-3xl">Ready to start this diet or academic year?</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">Contact admissions today — we reply on phone, email and WhatsApp.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950">Apply Now</Link>
            <a href={SITE.phoneHref} className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold">{SITE.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
