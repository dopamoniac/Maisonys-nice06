import { useParams } from "wouter";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fragrances, FRAGRANCE_PRICE } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";
import { productImages } from "@/lib/images";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Product() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const fragrance = fragrances.find(f => f.name === decodedName) || fragrances[0];

  const otherCollections = [...new Set(fragrances.map(f => f.collectionKey))].filter(k => k !== fragrance.collectionKey);
  const recommendations = otherCollections
    .map(key => fragrances.find(f => f.collectionKey === key)!)
    .slice(0, 3);

  const productImage = productImages[fragrance.imageKey];

  return (
    <div className="w-full bg-stone min-h-screen pt-24">

      {/* ─── HERO GRID ─── */}
      <section className="container mx-auto px-8 py-16 md:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-obsidian/5 overflow-hidden sticky top-28"
          >
            <img
              src={productImage}
              alt={fragrance.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="w-px h-12 bg-obsidian/15 mb-10" />

            {/* Family + Mood */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="text-obsidian/40 tracking-[0.3em] uppercase text-xs">{fragrance.family}</span>
              <span className="text-obsidian/20">·</span>
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium">{fragrance.mood}</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-obsidian mb-3">
              {fragrance.name}
            </motion.h1>

            {/* Volume */}
            <motion.p variants={fadeUp} className="text-obsidian/40 tracking-[0.2em] uppercase text-xs mb-4">
              {fragrance.volume} — Extrait de Parfum
            </motion.p>

            {/* Price */}
            <motion.p variants={fadeUp} className="text-obsidian font-serif text-2xl mb-8">
              {FRAGRANCE_PRICE}
            </motion.p>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-obsidian/80 font-serif text-xl md:text-2xl leading-snug mb-5">
              {fragrance.tagline}
            </motion.p>

            {/* Short description */}
            <motion.p variants={fadeUp} className="text-obsidian/55 leading-relaxed mb-10 text-base">
              {fragrance.shortDescription}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mb-14 flex flex-col gap-4">
              <Link href="/contact">
                <button className="w-full py-4 bg-obsidian text-stone tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-obsidian transition-colors duration-700 cursor-pointer">
                  Nous Contacter
                </button>
              </Link>
              <WhatsAppButton
                productName={fragrance.name}
                label="Commander sur WhatsApp"
                className="w-full"
              />
            </motion.div>

            {/* Spec table */}
            <motion.div variants={fadeUp} className="flex flex-col w-full border-t border-obsidian/10">
              {[
                ["Famille", fragrance.family],
                ["Humeur", fragrance.mood],
                ["Concentration", "Extrait de Parfum"],
                ["Volume", fragrance.volume],
                ["Prix", FRAGRANCE_PRICE],
                ["Disponible chez", "Maison YS — Nice"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-4 border-b border-obsidian/8">
                  <span className="tracking-widest uppercase text-xs text-obsidian/40">{label}</span>
                  <span className="text-sm text-obsidian/70">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT DETAIL ─── */}
      <section className="bg-obsidian py-28 w-full">
        <div className="container mx-auto px-8 max-w-7xl">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-8 h-px bg-gold/40" />
            <p className="text-stone/35 tracking-[0.35em] uppercase text-xs">Portrait olfactif</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

            {/* Sensations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold tracking-[0.3em] uppercase text-xs mb-8">
                Ce que vous ressentez
              </motion.p>
              <div className="flex flex-col gap-6">
                {fragrance.sensations.map((s, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex flex-col gap-1.5">
                    <div className="w-4 h-px bg-gold/30" />
                    <p className="text-stone/70 text-sm leading-relaxed">{s}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Usage */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold tracking-[0.3em] uppercase text-xs mb-8">
                Quand le porter
              </motion.p>
              <div className="flex flex-col gap-6">
                {fragrance.usages.map((u, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex flex-col gap-1.5">
                    <div className="w-4 h-px bg-gold/30" />
                    <p className="text-stone/70 text-sm leading-relaxed">{u}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold tracking-[0.3em] uppercase text-xs mb-8">
                Pourquoi choisir {fragrance.name}
              </motion.p>
              <div className="flex flex-col gap-5">
                {fragrance.benefits.map((b, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                    <Check size={11} className="text-gold/60 mt-1 shrink-0" />
                    <p className="text-stone/70 text-sm leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Conclusion hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-24 pt-20 border-t border-stone/8 max-w-2xl"
          >
            <p className="font-serif italic text-stone/55 text-lg md:text-xl leading-relaxed">
              « {fragrance.conclusion} »
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── RECOMMENDATIONS ─── */}
      <section className="bg-stone py-28 w-full">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <div className="w-8 h-px bg-obsidian/25 mb-6" />
            <h2 className="text-3xl font-serif text-obsidian mb-2">Vous aimerez aussi</h2>
            <p className="text-obsidian/30 tracking-widest uppercase text-xs">D'autres collections de la Maison</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${encodeURIComponent(f.name)}`}>
                  <div>
                    <div className="aspect-[4/5] bg-obsidian/5 mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <img
                        src={productImages[f.imageKey]}
                        alt={`${f.name} — Extrait de Parfum ${f.family} — Maison YS`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        style={{ objectPosition: "center 15%" }}
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gold/70 mb-1">{f.mood}</p>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl text-obsidian group-hover:text-gold transition-colors duration-500">{f.name}</h3>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all" />
                    </div>
                    <p className="text-xs text-obsidian/40 mt-1 leading-relaxed">{f.shortDescription}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
