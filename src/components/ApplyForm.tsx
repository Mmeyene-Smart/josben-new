"use client";
import { useState } from "react";
import { PROGRAMS, SITE } from "@/lib/site";

export default function ApplyForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", programme: PROGRAMS[0].slug, message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application — ${form.name} — ${form.programme}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProgramme: ${form.programme}\nMessage: ${form.message}`);
    window.location.href = `mailto:admissions@josbenibs.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input = "w-full rounded-xl border px-3 py-2 text-sm focus:border-navy-800 focus:outline-none";

  return (
    <form onSubmit={submit} className={`rounded-2xl border bg-white p-5 shadow-sm ${compact ? "" : "lg:p-6"}`}>
      <h3 className="font-serif-display text-lg font-bold text-navy-900">Apply / Request admission info</h3>
      <p className="mt-1 text-xs text-slate-500">Submits via your email app to admissions@josbenibs.com. Or <a className="font-bold text-navy-800 underline" href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input required className={input} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required className={input} placeholder="Phone (e.g. 080...)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input required type="email" className={input} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <select className={input} value={form.programme} onChange={(e) => setForm({ ...form, programme: e.target.value })}>
          {PROGRAMS.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
        </select>
        <textarea className={`${input} sm:col-span-2`} rows={4} placeholder="Message — qualifications, preferred start date, questions on fees..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button className="mt-4 w-full rounded-full bg-navy-900 py-3 text-sm font-bold text-white hover:bg-navy-800">Submit application request</button>
      {sent && <p className="mt-2 text-xs text-green-700">Opening your email app… if it didn&apos;t open, email admissions@josbenibs.com or WhatsApp {SITE.phone}.</p>}
    </form>
  );
}
