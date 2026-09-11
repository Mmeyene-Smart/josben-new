import SectionHeading from "@/components/SectionHeading";

const QUOTES = [
  {
    quote:
      "JOSBEN's evening lectures fitted around my bank job. I cleared my CIBN papers in one diet and got promoted the same year.",
    name: "Emeka O.",
    role: "CIBN Graduate · Banker, Uyo",
    initials: "EO",
  },
  {
    quote:
      "The ICAN coaching is relentless — mocks every week, personal feedback. I passed Skills level before my NYSC ended.",
    name: "Aisha B.",
    role: "ICAN Student",
    initials: "AB",
  },
  {
    quote:
      "From Uyo to London: the Access Programme prepared me so well that my first year at Roehampton felt like revision.",
    name: "Idara E.",
    role: "Access → University of Roehampton",
    initials: "IE",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading
        eyebrow="Student stories"
        title="Loved by ambitious students across AKWACROSS"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {QUOTES.map((q) => (
          <figure
            key={q.name}
            className="card-lift flex flex-col rounded-3xl border border-slate-200 bg-white p-6"
          >
            <div className="flex gap-1 text-gold-500" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M10 1.5 12.6 7l5.9.5-4.5 3.8 1.4 5.7L10 13.7 4.6 17l1.4-5.7L1.5 7.5 7.4 7 10 1.5Z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
              “{q.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-xs font-extrabold text-gold-500">
                {q.initials}
              </span>
              <span>
                <span className="block text-sm font-bold text-navy-900">{q.name}</span>
                <span className="block text-xs text-slate-500">{q.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
