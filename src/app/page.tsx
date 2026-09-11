import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AccreditationStrip from "@/components/AccreditationStrip";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { POSTS, SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const PROGRAM_CARDS = [
  {
    href: "/programmes/international-access",
    img: IMAGES.access,
    alt: "Graduate holding a diploma",
    tag: "International Access",
    title: "Study in the UK & beyond",
    desc: "Foundation route with articulation to the University of Roehampton, London.",
  },
  {
    href: "/programmes#undergraduate",
    img: IMAGES.undergraduate,
    alt: "Students listening in a lecture hall",
    tag: "Undergraduate",
    title: "Accounting, Business, Law & IT",
    desc: "Degree pathways in affiliation, plus NCC Education curriculum from the UK.",
  },
  {
    href: "/programmes#postgraduate",
    img: IMAGES.postgraduate,
    alt: "Students studying together on campus",
    tag: "Postgraduate",
    title: "MBA & M.Sc readiness",
    desc: "Overseas postgraduate preparation trusted by bank staff for a decade.",
  },
  {
    href: "/programmes#professional",
    img: IMAGES.professional,
    alt: "Graduates celebrating in gowns",
    tag: "Professional",
    title: "ICAN · CIBN · ACCA",
    desc: "Exam-focused coaching at Akwa Ibom's only CIBN-accredited centre.",
  },
];

const DISTINCTIVE = [
  {
    t: "CIBN Accredited",
    d: "The only higher institution in Akwa Ibom State accredited by the Chartered Institute of Bankers of Nigeria.",
  },
  {
    t: "UK Articulation",
    d: "Signed agreement with the University of Roehampton, London, plus our own college in Cambridgeshire.",
  },
  {
    t: "Seasoned Faculty",
    d: "Industry veterans blending theory with practical, exam-focused coaching that passes diets.",
  },
  {
    t: "Affordable + Scholarships",
    d: "Fees for the average Nigerian, plus bursaries for disabled, poor-background and excellent students.",
  },
];

const BLOG_IMAGES = [IMAGES.classroom, IMAGES.lecture, IMAGES.study];

export default function Home() {
  return (
    <div>
      {/* Photographic hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="JOSBEN graduates celebrating in cap and gown in Lagos"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <p className="eyebrow inline-block rounded-full border border-gold-500/60 bg-navy-950/60 px-4 py-1.5 text-gold-500">
            Uyo · Akwa Ibom · UK Pathways
          </p>
          <h1 className="mt-5 max-w-2xl font-serif-display text-4xl font-bold leading-[1.08] sm:text-6xl">
            Your home of excellence in business education
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-lg">
            CIBN-accredited banking training, ICAN / ACCA coaching, undergraduate &
            postgraduate routes — and an International Access Programme with
            articulation to the University of Roehampton, London.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="card-lift rounded-full bg-gold-500 px-7 py-3.5 text-sm font-extrabold text-navy-950 hover:bg-gold-600"
            >
              Apply Now
            </Link>
            <Link
              href="/programmes"
              className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore Programmes
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-200">
            <span>✓ Only CIBN-accredited centre in Akwa Ibom</span>
            <span>✓ NCC Education curriculum (UK)</span>
            <span>✓ Affordable fees + scholarships</span>
          </div>
        </div>
      </section>

      <AccreditationStrip />
      <Stats />

      {/* Programme showcase */}
      <section className="bg-cream mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="What we offer"
          title="Four routes, one destination: success"
          sub="From your first foundation class to a London degree or a professional charter."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_CARDS.map((c) => (
            <Link
              key={c.tag}
              href={c.href}
              className="card-lift group overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-gold-500 backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif-display text-lg font-bold leading-snug text-navy-900 group-hover:underline">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-navy-800">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/programmes"
            className="inline-block rounded-full bg-navy-900 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800"
          >
            View all 9 programmes
          </Link>
        </div>
      </section>

      {/* Distinctive */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Why JOSBEN"
          title="A pacesetter in the AKWACROSS region"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DISTINCTIVE.map((c, i) => (
            <div key={c.t} className="relative overflow-hidden rounded-3xl bg-navy-900 p-6 text-white">
              <span className="font-serif-display text-5xl font-bold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-serif-display text-lg font-bold text-gold-500">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campus split */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96">
            <Image
              src={IMAGES.campus}
              alt="Students learning together in a JOSBEN classroom"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-gold-600">Campus life · Uyo</p>
            <h2 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">
              State-of-the-art facilities, engaging lectures
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Critical thinking, collaboration and innovation — in small classes led by
              seasoned professionals, with evening and weekend options for working students.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {[
                "Interactive, case-based teaching",
                "Internships & industry networking",
                "Scholarships with Akwa Ibom priority",
              ].map((li) => (
                <li key={li} className="flex items-start gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z" clipRule="evenodd" />
                  </svg>
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
              <p className="font-extrabold text-navy-900">Visit us — {SITE.address}</p>
              <p className="mt-1">{SITE.hours.join(" · ")}</p>
              <p className="mt-1">
                <a className="font-bold text-navy-800 underline" href={SITE.phoneHref}>{SITE.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Insights */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionHeading eyebrow="Insights" title="News & guidance from the school" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <article key={p.slug} className="card-lift overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="relative h-40">
                  <Image
                    src={BLOG_IMAGES[i % BLOG_IMAGES.length]}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-slate-500">{p.date}</p>
                  <h3 className="mt-1 font-serif-display font-bold leading-snug text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <Image
          src={IMAGES.ctaBand}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center text-white">
          <p className="eyebrow text-gold-500">Admissions open</p>
          <h2 className="mt-2 max-w-2xl font-serif-display text-3xl font-bold sm:text-4xl">
            Ready to start this diet or academic year?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            Talk to admissions today — by phone, email, WhatsApp, or in person in Uyo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="card-lift rounded-full bg-gold-500 px-7 py-3 text-sm font-extrabold text-navy-950 hover:bg-gold-600">
              Apply Now
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-white/40 px-7 py-3 text-sm font-bold hover:bg-white/10">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
