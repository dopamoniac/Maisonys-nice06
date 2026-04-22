import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { logoImg } from "@/lib/images";

const STORAGE_KEY = "maisonys_intro_seen";
const DURATION_MS = 2000;

export default function IntroLoader() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* noop */
      }
      setVisible(false);
    }, DURATION_MS);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center"
        >
          {/* subtle radial gold glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,175,110,0.12) 0%, rgba(0,0,0,0) 60%)",
            }}
          />

          <div className="relative flex flex-col items-center px-8">
            <motion.img
              src={logoImg}
              alt="Maison YS"
              initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-32 md:h-44 w-auto object-contain drop-shadow-[0_0_24px_rgba(212,175,110,0.18)]"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col items-center"
            >
              <div className="w-10 h-px bg-gold/50 mb-5" />
              <p className="font-serif text-gold text-2xl md:text-3xl tracking-[0.35em] uppercase">
                Maison YS
              </p>
              <p className="mt-3 text-stone/40 tracking-[0.4em] uppercase text-[10px]">
                Extrait de Parfum
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
