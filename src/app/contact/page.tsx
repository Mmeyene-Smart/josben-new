import { SITE } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Contact Us</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">Contact Us</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <p className="text-sm"><span className="font-bold">Phone:</span> <a href={SITE.phoneHref} className="text-navy-800 underline">{SITE.phone}</a></p>
          <p className="mt-2 text-sm"><span className="font-bold">Address:</span> {SITE.address}</p>
          <div className="mt-2 text-sm"><span className="font-bold">Email:</span>
            {SITE.emails.map((e) => <p key={e}><a href={`mailto:${e}`} className="text-navy-800 underline">{e}</a></p>)}
          </div>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm">
            <p className="font-bold text-navy-900">Opening hours</p>
            {SITE.hours.map((h) => <p key={h} className="text-xs">{h}</p>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white">WhatsApp us</a>
            <a href={SITE.phoneHref} className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white">Call now</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border">
          <iframe
            title="JOSBEN map — Uyo"
            src="https://www.openstreetmap.org/export/embed.html?bbox=7.87%2C4.99%2C7.99%2C5.05&layer=mapnik&marker=5.02%2C7.93"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
