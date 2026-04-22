import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroLoader from "@/components/IntroLoader";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col w-full overflow-x-hidden">
      <IntroLoader />
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
