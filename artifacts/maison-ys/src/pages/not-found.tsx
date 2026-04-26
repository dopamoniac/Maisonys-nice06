import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-obsidian text-stone">
      <div className="text-center px-8 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gold/30 mb-12" aria-hidden="true" />
          <p className="text-gold/50 tracking-[0.3em] uppercase text-xs mb-6">Erreur 404</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Cette page<br />n'existe pas.
          </h1>
          <p className="text-stone/40 text-sm leading-relaxed mb-12 max-w-xs">
            La page que vous cherchez a peut-être été déplacée ou n'existe plus.
          </p>
          <Link href="/">
            <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase text-stone border border-stone/30 px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-500 cursor-pointer">
              Retour à l'accueil <ArrowRight size={11} aria-hidden="true" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
