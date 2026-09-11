import Link from "next/link";
import { PROGRAMS } from "@/lib/site";

export const metadata = { title: "Programmes" };

const GROUPS: { id: string; title: string; desc: string; cats: string[] }[] = [
  { id: "access", title: "International Access Programme", desc: "Foundation to UK degrees.", cats: ["access"] },
  { id: "undergraduate", title: "Academic Programmes (Undergraduate)", desc: "Accounting, Business, Law, IT + Nigerian affiliation (B.Sc Accounting, Banking/Finance, Business Management).", cats: ["undergraduate"] },
  { id: "postgraduate", title: "Academic Programmes (Postgraduate)", desc: "MBA / M.Sc readiness and overseas preparation.", cats: ["postgraduate"] },
  { id: "professional", title: "Professional Programmes", desc: "ICAN, CIBN, ACCA (UK).", cats: ["professional"] },
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
        <section key={g.id} id={g.id} className="mt-10 scroll-mt-24">
          <h2 className="font-serif-display text-xl font-bold text-navy-900">{g.title}</h2>
          <p className="mt-1 text-sm text-slate-600">{g.desc}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.filter((p) => g.cats.includes(p.category)).map((p) => (
              <Link key={p.slug} href={`/programmes/${p.slug}`} className="rounded-2xl border p-5 hover:shadow-md">
                <h3 className="font-serif-display font-bold text-navy-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                <p className="mt-2 text-xs text-slate-500">{p.duration} · {p.mode}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
