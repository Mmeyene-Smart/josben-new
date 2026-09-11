"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-navy-950 text-xs text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
          <p className="truncate">{SITE.address}</p>
          <div className="flex items-center gap-4">
            <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
            <span className="hidden sm:inline">Mon–Fri 10am–7pm · Sat 10am–5pm</span>
          </div>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 font-serif-display text-xl font-bold text-gold-500 shadow-sm">J</div>
            <div className="leading-tight">
              <p className="font-serif-display text-base font-bold text-navy-900 sm:text-lg">JOSBEN International</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">Business School · Uyo</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href} className="transition-colors hover:text-navy-800">{n.label}</Link>
            ))}
            <Link href="/admissions" className="card-lift rounded-full bg-gold-500 px-5 py-2.5 text-navy-950 shadow-sm hover:bg-gold-600">Apply Now</Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="min-h-[44px] min-w-[44px] rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? "✕" : "☰ Menu"}
          </button>
        </div>
        {open && (
          <nav className="border-t bg-white px-4 py-3 lg:hidden">
            <div className="grid gap-1">
              {NAV.map((n) => (
                <div key={n.label}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100">{n.label}</Link>
                  {n.children && (
                    <div className="ml-4 grid gap-1 border-l pl-2">
                      {n.children.map((c) => (
                        <Link key={c.label} href={c.href} onClick={() => setOpen(false)} className="block rounded px-2 py-1 text-xs text-slate-600 hover:bg-slate-100">{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/admissions" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-navy-900 px-4 py-2 text-center text-sm text-white">Apply Now</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
