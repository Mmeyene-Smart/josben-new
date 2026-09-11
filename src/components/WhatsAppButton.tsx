import { SITE } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-700"
    >
      Chat on WhatsApp
    </a>
  );
}
