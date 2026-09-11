import ApplyForm from "@/components/ApplyForm";

export const metadata = { title: "Admissions & Apply" };

const STEPS = [
  { t: "1. Choose a programme", d: "Pick from International Access, Undergraduate, Postgraduate or Professional (ICAN / CIBN / ACCA)." },
  { t: "2. Send your details", d: "Use the form below, WhatsApp or visit 15 William Bassey Street, Uyo." },
  { t: "3. Get counselled", d: "Admissions confirms entry requirements, fees, diet dates and UK progression where relevant." },
  { t: "4. Enrol & start", d: "Pay fees, get your timetable and join lectures (evening/weekend options for workers)." },
];

const FAQS = [
  { q: "What are the fees?", a: "Fees are kept affordable for the average Nigerian. Exact fees depend on programme and diet — contact admissions for the current schedule." },
  { q: "Are scholarships available?", a: "Yes — for disabled students, those from poor backgrounds, and excellent academic records, with priority to Akwa Ibom students." },
  { q: "I work in a bank. Can I combine study with work?", a: "Yes. CIBN/ICAN/ACCA lectures run in evenings/weekends. JOSBEN has trained bank staff for about a decade." },
  { q: "How does the UK route work?", a: "Via NCC Education curriculum and articulation with University of Roehampton, London through JOSBEN International College UK." },
];

export default function Admissions() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Admissions</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900 sm:text-4xl">Admissions — Apply Now</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">On-site application (new). Previously this page only linked out — now you can apply directly.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <div className="grid gap-3">
            {STEPS.map((s) => (
              <div key={s.t} className="rounded-2xl border p-4">
                <p className="font-bold text-navy-900">{s.t}</p>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-8 font-serif-display text-xl font-bold text-navy-900">FAQs</h2>
          <div className="mt-3 grid gap-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border p-4 text-sm">
                <summary className="cursor-pointer font-bold text-navy-900">{f.q}</summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <ApplyForm />
      </div>
    </div>
  );
}
