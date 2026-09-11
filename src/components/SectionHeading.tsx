export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-serif-display text-2xl font-bold text-navy-900 sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 text-sm text-slate-600 sm:text-base">{sub}</p>}
    </div>
  );
}
