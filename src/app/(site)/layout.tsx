import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TickerBanner from "@/components/layout/TickerBanner";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TickerBanner />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
