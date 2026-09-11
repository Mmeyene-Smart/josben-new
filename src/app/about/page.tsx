import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "About Us" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; About Us</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900 sm:text-4xl">About JOSBEN International Business School</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
        JOSBEN International Business School is set out to be a pacesetter and role model to all
        other Business Schools in Nigeria — offering bespoke courses that meet and surpass
        international standards. A member of JOSBEN Group in the vibrant City of Uyo, Akwa Ibom
        State, the school collaborates with institutions at home and overseas to deliver academic
        and professional programmes with state-of-the-art facilities and a decade of capacity-building experience.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { t: "CIBN Accreditation", d: "The only higher institution in Akwa Ibom State accredited by CIBN for banking & financial training." },
          { t: "UK Presence", d: "JOSBEN International College, Cambridgeshire + articulation with University of Roehampton, London." },
          { t: "NCC Education", d: "Accredited academic courses delivered with our UK sister college for global progression." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border p-5">
            <h3 className="font-serif-display font-bold text-navy-900">{c.t}</h3>
            <p className="mt-1 text-sm text-slate-600">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading eyebrow="Mission" title="Highly skilled graduates for today and the future" sub="Using state-of-the-art facilities and a seasoned, motivated global workforce." />
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <h2 className="font-serif-display text-xl font-bold text-navy-900">Humanitarian impact & scholarships</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          JOSBEN employs hundreds of direct and indirect staff, boosts Uyo&apos;s economy with visiting
          students and investors, and awards scholarships to disabled students, those from poor
          backgrounds, and those with excellent records — with priority to Akwa Ibom indigenes.
          Fees are kept affordable so children of common men, not only elites, can access quality higher education here and overseas.
        </p>
      </div>
    </div>
  );
}
