import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { fragrances, collections, FRAGRANCE_PRICE } from "@/lib/data";
import { productImages } from "@/lib/images";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Collection() {
  return (
    <div className="w-full bg-stone min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-8 max-w-7xl">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-32 flex flex-col items-center"
        >
          <div className="w-px h-16 bg-obsidian/15 mb-10" aria-hidden="true" />
          <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-5">Maison YS — Nice, Côte d'Azur</p>
          <h1 className="text-obsidian text-5xl md:text-7xl font-serif mb-6">La Collection</h1>
          <p className="text-obsidian/45 tracking-[0.2em] uppercase text-xs max-w-md leading-loose">
            Extrait de Parfum · 50 ML · Élaboré pour ceux qui comprennent la différence.
          </p>
          <div className="w-px h-8 bg-obsidian/10 mt-10" aria-hidden="true" />
        </motion.header>

        {/* Three collections */}
        {collections.map((col, colIndex) => {
          const colFragrances = fragrances.filter(f => f.collectionKey === col.key);
          const isEven = colIndex % 2 === 0;

          return (
            <section
              key={col.key}
              id={col.key}
              aria-labelledby={`col-${col.key}-heading`}
              className={`mb-32 ${!isEven ? "bg-obsidian -mx-8 px-8 py-20 rounded-none" : ""}`}
            >
              {/* Collection header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-end justify-between mb-16 flex-wrap gap-4"
              >
                <div>
                  <div className={`w-8 h-px mb-4 ${!isEven ? "bg-gold/50" : "bg-obsidian/30"}`} aria-hidden="true" />
                  <h2
                    id={`col-${col.key}-heading`}
                    className={`text-3xl md:text-4xl font-serif ${!isEven ? "text-gold" : "text-obsidian"}`}
                  >
                    {col.name}
                  </h2>
                  <p className={`text-xs tracking-widest mt-2 italic font-serif ${!isEven ? "text-stone/40" : "text-obsidian/40"}`}>
                    {col.tagline}
                  </p>
                </div>

                {/* WhatsApp rapide */}
                <a
                  href={buildWhatsAppUrl(col.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs tracking-[0.2em] uppercase border-b pb-1 transition-colors ${
                    !isEven
                      ? "text-gold/50 border-gold/25 hover:text-gold hover:border-gold"
                      : "text-obsidian/40 border-obsidian/20 hover:text-gold hover:border-gold"
                  }`}
                  aria-label={`Commander ${col.name} sur WhatsApp`}
                >
                  Commander sur WhatsApp
                </a>
              </motion.div>

              {/* Products grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {colFragrances.map((fragrance, i) => (
                  <motion.div
                    key={fragrance.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    className="group"
                  >
                    <article aria-label={`${fragrance.name} — ${fragrance.family}`}>
                      <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                        <div className="cursor-pointer">
                          <div className={`aspect-[4/5] overflow-hidden mb-6 relative ${!isEven ? "bg-stone/5" : "bg-obsidian/5"}`}>
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 ${!isEven ? "bg-gold/8" : "bg-gold/5"}`} aria-hidden="true" />
                            <img
                              src={productImages[fragrance.imageKey]}
                              alt={`${fragrance.name} — Extrait de Parfum ${fragrance.family}, ${fragrance.volume} — Maison YS`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                              style={{ objectPosition: "center 15%" }}
                              loading="lazy"
                            />
                          </div>
                          <div className="text-center flex flex-col items-center gap-1.5">
                            <p className={`text-xs uppercase tracking-[0.25em] ${!isEven ? "text-gold/50" : "text-obsidian/40"}`}>
                              {fragrance.family}
                            </p>
                            <h3 className={`text-2xl font-serif group-hover:text-gold transition-colors duration-500 ${!isEven ? "text-stone" : "text-obsidian"}`}>
                              {fragrance.name}
                            </h3>
                            <p className={`text-xs tracking-widest italic font-serif ${!isEven ? "text-gold/45" : "text-gold/60"}`}>
                              {fragrance.mood}
                            </p>
                            <p className={`text-xs tracking-widest ${!isEven ? "text-stone/25" : "text-obsidian/35"}`}>
                              {fragrance.volume} — Extrait de Parfum
                            </p>
                            <p className="text-gold font-serif text-xl mt-3 tracking-[0.05em]">
                              {FRAGRANCE_PRICE}
                            </p>

                            {/* CTA inline */}
                            <span className={`mt-3 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 ${!isEven ? "text-stone/50" : "text-obsidian/40"}`}>
                              Voir le parfum <ArrowRight size={9} aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* WhatsApp direct sous chaque produit */}
                      <div className="text-center mt-4">
                        <a
                          href={buildWhatsAppUrl(fragrance.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-[10px] tracking-[0.18em] uppercase border-b pb-px transition-colors ${
                            !isEven
                              ? "text-gold/35 border-gold/20 hover:text-gold hover:border-gold"
                              : "text-obsidian/30 border-obsidian/15 hover:text-gold hover:border-gold"
                          }`}
                          aria-label={`Commander ${fragrance.name} sur WhatsApp`}
                        >
                          Commander sur WhatsApp
                        </a>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Contact rapide bas de page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 pt-14 border-t border-obsidian/10"
        >
          <p className="text-obsidian/40 text-xs tracking-widest uppercase mb-4">Une question ? Un conseil ?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+33626070850"
              className="text-obsidian/50 hover:text-gold transition-colors text-sm font-serif"
              aria-label="Appeler Maison YS"
            >
              +33 6 26 07 08 50
            </a>
            <span className="hidden sm:block text-obsidian/20">·</span>
            <a
              href="mailto:maisonys06@gmail.com"
              className="text-obsidian/50 hover:text-gold transition-colors text-sm font-serif"
              aria-label="Email Maison YS"
            >
              maisonys06@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
