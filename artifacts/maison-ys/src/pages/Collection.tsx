import { motion } from "framer-motion";
import { Link, useSearch } from "wouter";
import { fragrances, collections, FRAGRANCE_PRICE } from "@/lib/data";
import { productImages } from "@/lib/images";

export default function Collection() {
  return (
    <div className="w-full bg-stone min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-8 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-32 flex flex-col items-center"
        >
          <div className="w-px h-16 bg-obsidian/15 mb-10" />
          <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-5">Maison YS</p>
          <h1 className="text-obsidian text-5xl md:text-7xl font-serif mb-6">La Collection</h1>
          <p className="text-obsidian/45 tracking-[0.2em] uppercase text-xs max-w-md leading-loose">
            Extrait de Parfum — Élaboré pour ceux qui comprennent la différence.
          </p>
        </motion.div>

        {/* Three collections */}
        {collections.map((col, colIndex) => {
          const colFragrances = fragrances.filter(f => f.collectionKey === col.key);
          const isEven = colIndex % 2 === 0;

          return (
            <section
              key={col.key}
              id={col.key}
              className={`mb-32 ${!isEven ? "bg-obsidian -mx-8 px-8 py-20 rounded-none" : ""}`}
            >
              {/* Collection header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-end justify-between mb-16"
              >
                <div>
                  <div className={`w-8 h-px mb-4 ${!isEven ? "bg-gold/50" : "bg-obsidian/30"}`} />
                  <h2 className={`text-3xl md:text-4xl font-serif ${!isEven ? "text-gold" : "text-obsidian"}`}>
                    {col.name}
                  </h2>
                  <p className={`text-xs tracking-widest mt-2 ${!isEven ? "text-stone/40" : "text-obsidian/40"}`}>
                    {col.tagline}
                  </p>
                </div>
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
                    <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                      <div className="cursor-pointer">
                        <div className={`aspect-[4/5] overflow-hidden mb-8 relative ${!isEven ? "bg-stone/5" : "bg-obsidian/5"}`}>
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 ${!isEven ? "bg-gold/8" : "bg-gold/5"}`} />
                          <img
                            src={productImages[fragrance.imageKey]}
                            alt={fragrance.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            style={{ objectPosition: "center 15%" }}
                          />
                        </div>
                        <div className="text-center flex flex-col items-center gap-1.5">
                          <p className={`text-xs uppercase tracking-[0.25em] ${!isEven ? "text-gold/50" : "text-obsidian/40"}`}>
                            {fragrance.family}
                          </p>
                          <h3 className={`text-2xl font-serif group-hover:text-gold transition-colors duration-500 ${!isEven ? "text-stone" : "text-obsidian"}`}>
                            {fragrance.name}
                          </h3>
                          <p className={`text-xs tracking-widest italic ${!isEven ? "text-gold/45" : "text-gold/60"}`}>
                            {fragrance.mood}
                          </p>
                          <p className={`text-xs tracking-widest ${!isEven ? "text-stone/25" : "text-obsidian/35"}`}>
                            {fragrance.volume} — Extrait de Parfum
                          </p>
                          <p className="text-gold font-serif text-lg md:text-xl mt-3 tracking-[0.05em]">
                            {FRAGRANCE_PRICE}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

      </div>
    </div>
  );
}
