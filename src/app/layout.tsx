import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "JOSBEN International Business School | Uyo, Akwa Ibom",
    template: "%s | JOSBEN International Business School",
  },
  description:
    "JOSBEN International Business School in Uyo, Akwa Ibom — CIBN-accredited professional training, undergraduate & postgraduate pathways, and international access programmes with UK articulation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-800 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
