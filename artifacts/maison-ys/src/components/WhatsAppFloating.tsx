import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  const [location] = useLocation();

  let productName: string | null = null;
  if (location.startsWith("/product/")) {
    try {
      productName = decodeURIComponent(location.replace("/product/", ""));
    } catch {
      productName = null;
    }
  }

  const href = buildWhatsAppUrl(productName);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Maison YS sur WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 group"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gold/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <span
        className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-obsidian border border-gold/40 shadow-[0_8px_30px_rgba(0,0,0,0.45)] group-hover:border-gold transition-colors duration-500"
      >
        <FaWhatsapp
          size={26}
          className="text-gold group-hover:text-stone transition-colors duration-500"
        />
      </span>
    </motion.a>
  );
}
