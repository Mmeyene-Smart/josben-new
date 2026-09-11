import Link from "next/link";
import { POSTS } from "@/lib/site";

export const metadata = { title: "Blog" };

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Blog</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">News & Insights</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-5">
            <p className="text-xs text-slate-500">{p.date}</p>
            <h2 className="mt-1 font-serif-display font-bold text-navy-900">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
            <Link href="/contact" className="mt-3 inline-block text-sm font-bold text-navy-800">Ask about this →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
