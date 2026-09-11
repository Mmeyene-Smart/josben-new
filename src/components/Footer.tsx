import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif-display text-lg font-bold text-white">JOSBEN International Business School</p>
          <p className="mt-2 text-sm">Home of excellence in professional and academic tutoring in Uyo, Akwa Ibom — with UK pathways.</p>
          <p className="mt-3 text-xs uppercase tracking-widest text-gold-500">Diversity · Innovation · Excellence · Trust</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Programmes</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/programmes/international-access" className="hover:text-white">International Access</Link></li>
            <li><Link href="/programmes#undergraduate" className="hover:text-white">Undergraduate</Link></li>
            <li><Link href="/programmes#postgraduate" className="hover:text-white">Postgraduate</Link></li>
            <li><Link href="/programmes#professional" className="hover:text-white">Professional (ICAN/CIBN/ACCA)</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">School</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/admissions" className="hover:text-white">Admissions & Apply</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/vacancy" className="hover:text-white">Vacancy</Link></li>
            <li><Link href="/policies" className="hover:text-white">Our Policies</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Contact</p>
          <p className="mt-3 text-sm">{SITE.address}</p>
          <p className="mt-2 text-sm"><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></p>
          {SITE.emails.map((e) => (
            <p key={e} className="text-sm"><a href={`mailto:${e}`} className="hover:text-white">{e}</a></p>
          ))}
          <div className="mt-2 text-xs">{SITE.hours.map((h) => <p key={h}>{h}</p>)}</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Modern redesign of josbenibs.com</p>
        </div>
      </div>
    </footer>
  );
}
