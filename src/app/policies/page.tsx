import Link from "next/link";

export const metadata = { title: "Our Policies" };

const POLICIES = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "refund-policy", title: "Tuition Fees Cancellation & Refund Policy" },
  { slug: "terms", title: "Terms & Conditions of Using Website" },
  { slug: "checkout-payment", title: "Checkout & Payment Policy" },
];

export default function Policies() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Our Policies</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">Our Policies</h1>
      <div className="mt-6 grid gap-3">
        {POLICIES.map((p) => (
          <Link key={p.slug} href={`/policies/${p.slug}`} className="rounded-2xl border p-4 font-bold text-navy-900 hover:shadow-sm">{p.title} →</Link>
        ))}
      </div>
    </div>
  );
}
