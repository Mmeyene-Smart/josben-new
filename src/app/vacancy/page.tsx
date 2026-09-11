export const metadata = { title: "Vacancy" };

export default function Vacancy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-xs text-slate-500">Home &gt; Vacancy</p>
      <h1 className="mt-2 font-serif-display text-3xl font-bold text-navy-900">Work with JOSBEN</h1>
      <p className="mt-3 text-sm text-slate-600 sm:text-base">
        We periodically recruit lecturers (Accounting, Banking & Finance, Management, Law, IT),
        admissions officers and admin staff in Uyo. Email your CV to admin@josbenibs.com with the
        role as subject. No open roles are listed right now — check back or send a speculative application.
      </p>
      <a href="mailto:admin@josbenibs.com?subject=Vacancy%20application" className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Send CV via email</a>
    </div>
  );
}
