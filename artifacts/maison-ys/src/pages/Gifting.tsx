import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { baccaratGiftImg, baccaratSetImg } from "@/lib/images";
import { COFFRET_PRICE } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Gifting() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } }
  };

  return (
    <div className="w-full bg-obsidian min-h-screen text-stone pt-20">

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/55 z-10" />
          <img src={baccaratGiftImg} alt="Coffrets Maison YS" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent z-10" />
        </div>

        <div className="relative z-20 px-8 md:px-16 lg:px-24 max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-8 h-px bg-gold/60" />
            <p className="text-gold/70 tracking-[0.35em] uppercase text-xs">L'Art de la Présentation</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-6 leading-tight"
          >
            Le Don de la<br/>Pure Opulence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-stone/50 tracking-widest uppercase text-xs"
          >
            Extrait de Parfum — Le coffret le plus rare qui soit.
          </motion.p>
        </div>
      </section>

      {/* Detail section */}
      <section className="py-28 container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-8 h-px bg-gold/50 mb-8" />
            <h2 className="text-3xl font-serif text-gold mb-8">La Collection Prestige</h2>
            <p className="text-stone/60 leading-relaxed mb-8 text-sm">
              Un coffret Maison YS est bien plus qu'un parfum. C'est un instant de révélation. Habillé de textures en marbre sombre et orné de notre emblème doré, chaque coffret élève l'acte d'offrir en un rituel inoubliable.
            </p>
            <p className="text-stone/60 leading-relaxed mb-10 text-sm">
              Composez votre propre sélection ou choisissez parmi nos trilogies olfactives, soigneusement équilibrées pour explorer différentes facettes de notre univers parfumé.
            </p>

            <div className="flex items-baseline gap-4 pt-8 border-t border-stone/10">
              <p className="text-stone/40 tracking-[0.3em] uppercase text-xs">Coffret</p>
              <p className="text-gold font-serif text-2xl">{COFFRET_PRICE}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square bg-stone/5 p-6"
          >
            <img src={baccaratSetImg} alt="Coffret Baccarat Maison YS" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-28 bg-stone text-obsidian text-center">
        <div className="container mx-auto px-8 max-w-xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-14 bg-gold/40 mb-14" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Événements & Entreprises</h2>
            <p className="text-obsidian/60 leading-relaxed mb-12 text-sm max-w-sm">
              Pour les grandes occasions et les coffrets d'entreprise, Maison YS propose des services de sélection personnalisés. Contactez notre équipe pour organiser votre commande sur mesure.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-obsidian text-stone tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-obsidian transition-colors duration-700 cursor-pointer">
                  Nous Contacter
                </span>
              </Link>
              <WhatsAppButton
                productName="Coffret"
                label="Commander sur WhatsApp"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
