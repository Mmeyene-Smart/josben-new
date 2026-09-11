import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMS } from "@/lib/site";
import { IMAGES, PROGRAM_IMAGES } from "@/lib/images";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROGRAMS.find((x) => x.slug === slug);
  return { title: p ? p.title : "Programme" };
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROGRAMS.find((x) => x.slug === slug);
  if (!p) return notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs text-slate-500">
        <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link href="/programmes" className="hover:underline">Programmes</Link> &gt; {p.title}
      </p>
      <div className="relative mt-6 h-56 overflow-hidden rounded-3xl sm:h-72">
        <Image
          src={PROGRAM_IMAGES[p.slug] ?? IMAGES.campus}
          alt={p.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-500 backdrop-blur">{p.category}</p>
      </div>
      <h1 className="mt-5 font-serif-display text-3xl font-bold text-navy-900 sm:text-4xl">{p.title}</h1>
      <p className="mt-2 text-slate-600">{p.tagline}</p>
      <div className="mt-6 grid gap-3 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-3">
        <div><p className="text-xs font-bold uppercase text-slate-500">Duration</p><p className="font-semibold">{p.duration}</p></div>
        <div><p className="text-xs font-bold uppercase text-slate-500">Mode</p><p className="font-semibold">{p.mode}</p></div>
        <div><p className="text-xs font-bold uppercase text-slate-500">Who for</p><p className="font-semibold">{p.audience}</p></div>
      </div>
      <h2 className="mt-8 font-serif-display text-xl font-bold text-navy-900">Highlights</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {p.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
        {p.body.map((b, i) => <p key={i}>{b}</p>)}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admissions" className="rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Apply for this programme</Link>
        <Link href="/programmes" className="rounded-full border px-6 py-3 text-sm font-bold">← All programmes</Link>
      </div>
    </div>
  );
}
