import { notFound } from "next/navigation";

const DOCS: Record<string, { title: string; body: string[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: ["JOSBEN collects only the contact and academic details you provide for admissions and enquiries.", "We never sell your data. Contact admin@josbenibs.com to access or delete your information."],
  },
  "refund-policy": {
    title: "Tuition Fees Cancellation & Refund Policy",
    body: ["Cancellations before lectures commence attract a full refund less administrative charges.", "Once a diet/term has started, fees are non-refundable except at management discretion (e.g. medical grounds with evidence)."],
  },
  "terms": {
    title: "Terms & Conditions of Using Website",
    body: ["Content on this site describes JOSBEN programmes and may change without notice.", "Programme admission is subject to meeting entry requirements and fee payment."],
  },
  "checkout-payment": {
    title: "Checkout & Payment Policy",
    body: ["Fees are paid via approved bank channels shared by admissions. Always obtain an official receipt.", "Online enquiries via this site do not collect payments — do not transfer to personal accounts."],
  },
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCS[slug];
  if (!doc) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Our Policies &gt; {doc.title}</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">{doc.title}</h1>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
        {doc.body.map((b, i) => <p key={i}>{b}</p>)}
      </div>
    </div>
  );
}
