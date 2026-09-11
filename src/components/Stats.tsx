const STATS = [
  { value: "10+", label: "Years training bankers & professionals" },
  { value: "100s", label: "Graduates thriving in global careers" },
  { value: "No. 1", label: "Only CIBN-accredited centre in Akwa Ibom" },
  { value: "UK", label: "Roehampton articulation & NCC routes" },
];

export default function Stats() {
  return (
    <section aria-label="JOSBEN at a glance" className="bg-navy-950">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-12 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 text-center ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
          >
            <dt className="order-2 mt-1 block text-xs leading-snug text-slate-300">{s.label}</dt>
            <dd className="order-1 font-serif-display text-4xl font-bold text-gold-500 sm:text-5xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
