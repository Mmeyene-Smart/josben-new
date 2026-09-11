import Image from "next/image";
import Link from "next/link";
import { PROGRAMS } from "@/lib/site";
import { IMAGES, PROGRAM_IMAGES } from "@/lib/images";

export const metadata = { title: "Programmes" };

const GROUPS: { id: string; title: string; desc: string; img: string; cats: string[] }[] = [
  { id: "access", title: "International Access Programme", desc: "Foundation to UK degrees.", img: IMAGES.access, cats: ["access"] },
  { id: "undergraduate", title: "Academic Programmes (Undergraduate)", desc: "Accounting, Business, Law, IT + Nigerian affiliation (B.Sc Accounting, Banking/Finance, Business Management).", img: IMAGES.undergraduate, cats: ["undergraduate"] },
  { id: "postgraduate", title: "Academic Programmes (Postgraduate)", desc: "MBA / M.Sc readiness and overseas preparation.", img: IMAGES.postgraduate, cats: ["postgraduate"] },
  { id: "professional", title: "Professional Programmes", desc: "ICAN, CIBN, ACCA (UK).", img: IMAGES.professional, cats: ["professional"] },
];

export default function Programmes() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Programmes</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900 sm:text-4xl">What we offer</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
        Bespoke academic and professional courses — including NCC Education-accredited content
        from our UK sister college — with strong industry and university partnerships.
      </p>
      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="mt-12 scroll-mt-24">
          <div className="relative h-48 overflow-hidden rounded-3xl sm:h-56">
            <Image
              src={g.img}
              alt={g.title}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h2 className="font-serif-display text-xl font-bold text-white sm:text-2xl">{g.title}</h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-200">{g.desc}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.filter((p) => g.cats.includes(p.category)).map((p) => (
              <Link key={p.slug} href={`/programmes/${p.slug}`} className="card-lift overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative h-32">
                  <Image
                    src={PROGRAM_IMAGES[p.slug] ?? IMAGES.campus}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif-display font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                  <p className="mt-2 text-xs font-semibold text-slate-500">{p.duration} · {p.mode}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
