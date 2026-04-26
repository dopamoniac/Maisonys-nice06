import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Gem, MapPin, Sparkles } from "lucide-react";
import heroDesktopImg from "@assets/upscalecover_1776804479421.png";
import heroMobileImg from "@assets/abc-mobile_(1)_1776804978771.png";
import { baccaratGiftImg, productImages } from "@/lib/images";
import { fragrances, collections, FRAGRANCE_PRICE } from "@/lib/data";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.83, 0, 0.17, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: EASE_OUT } }
};

const kenBurnsDesktop = {
  animate: { scale: [1, 1.045], x: [0, -14], y: [0, -9] },
  transition: { duration: 30, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" as const },
};

const kenBurnsMobile = {
  animate: { scale: [1, 1.03], y: [0, -6] },
  transition: { duration: 28, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" as const },
};

// Trust pillars — brand facts only, no fake claims
const trustPillars = [
  {
    icon: <Gem size={14} className="text-gold" aria-hidden="true" />,
    label: "Extrait de Parfum",
    sub: "Concentration maximale",
  },
  {
    icon: <MapPin size={14} className="text-gold" aria-hidden="true" />,
    label: "Nice, Côte d'Azur",
    sub: "2 bd Raimbaldi — 06000",
  },
  {
    icon: <Sparkles size={14} className="text-gold" aria-hidden="true" />,
    label: "Parfumerie de Niche",
    sub: "Collections exclusives",
  },
];

export default function Home() {
  const featuredFragrances = [
    fragrances.find(f => f.collectionKey === "noire")!,
    fragrances.find(f => f.collectionKey === "pierre")!,
    fragrances.find(f => f.collectionKey === "doree")!,
  ];

  // Desktop mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 40 });
  const imgParallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const imgParallaxY = useTransform(springY, [-1, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width * 2 - 1);
    mouseY.set((e.clientY - rect.top) / rect.height * 2 - 1);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div className="w-full">

      {/* ─── HERO MOBILE (below md) ─── */}
      <section
        className="md:hidden relative h-[100dvh] w-full overflow-hidden bg-[#1c0e04] flex flex-col"
        aria-label="Maison YS — Extraits de Parfum, Nice Côte d'Azur"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-[-5%]"
            animate={kenBurnsMobile.animate}
            transition={kenBurnsMobile.transition}
          >
            <img
              src={heroMobileImg}
              alt="Flacon de parfum Maison YS — extrait de parfum de luxe, Nice Côte d'Azur"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#1c0e04]/82 from-[8%] via-[#1c0e04]/28 via-[42%] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#1c0e04]/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1c0e04]/50 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 85% 85% at 65% 55%, transparent 38%, rgba(8,5,2,0.55) 100%)" }}
          />

          {/* Amber haze layers */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.06, 0.2, 0.06], x: [0, 18, 0] }}
            transition={{ duration: 22, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" }}
            style={{ background: "radial-gradient(ellipse 60% 55% at 62% 52%, rgba(190,105,12,0.28) 0%, transparent 68%)" }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              background: "radial-gradient(ellipse 32% 36% at 66% 55%, rgba(225,140,18,0.42) 0%, transparent 62%)",
              transformOrigin: "66% 55%",
            }}
            animate={{ opacity: [0.05, 0.32, 0.05], scale: [0.95, 1.06, 0.95] }}
            transition={{ duration: 9, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center flex-1 pt-6 px-7 w-[62%]">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
            className="flex items-center gap-3 mb-7"
          >
            <motion.div
              className="h-px bg-stone/45"
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-stone/60 tracking-[0.25em] uppercase font-sans" style={{ fontSize: "11px" }}>
              Maison YS — Nice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-stone font-serif leading-[0.95] tracking-[0.03em] uppercase mb-4"
            style={{ fontSize: "clamp(2.8rem, 12vw, 3.8rem)" }}
          >
            Rare par<br />nature.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE_OUT }}
            className="font-serif italic mb-3"
            style={{ color: "#C9A84C", fontSize: "clamp(0.9rem, 3.5vw, 1.05rem)" }}
          >
            Raffiné avec intention.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85, ease: EASE_OUT }}
            className="text-stone/50 mb-9 leading-relaxed"
            style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.82rem)" }}
          >
            Extraits de parfum inspirés<br />par l'élégance de la Côte d'Azur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: EASE_OUT }}
            className="flex flex-col gap-3"
          >
            <Link href="/collection">
              <motion.span
                whileHover={{ y: -1, borderColor: "rgba(201,168,76,0.65)", boxShadow: "0 0 18px rgba(180,120,20,0.18)" }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase text-stone border border-stone/40 px-6 py-3.5 cursor-pointer whitespace-nowrap"
                style={{ display: "inline-flex" }}
                role="link"
              >
                Découvrir la Collection
                <ArrowRight size={9} aria-hidden="true" />
              </motion.span>
            </Link>

            <a
              href="https://wa.me/33626070850?text=Bonjour%2C+je+souhaite+d%C3%A9couvrir+la+collection+Maison+YS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[9px] tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: "#C9A84C" }}
              aria-label="Commander sur WhatsApp"
            >
              <span className="w-4 h-px bg-gold/60" />
              Commander sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── HERO DESKTOP (md+) ─── */}
      <motion.section
        className="hidden md:flex relative h-[100dvh] w-full overflow-hidden bg-[#080706] items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Maison YS — Extraits de Parfum de Luxe, Nice Côte d'Azur"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-[-6%]"
            style={{ x: imgParallaxX, y: imgParallaxY }}
            animate={kenBurnsDesktop.animate}
            transition={kenBurnsDesktop.transition}
          >
            <img
              src={heroDesktopImg}
              alt="Flacon de parfum Maison YS — extrait de parfum de luxe, Nice Côte d'Azur"
              className="w-full h-full object-cover"
              style={{ objectPosition: "60% center" }}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/82 from-[18%] via-[#080706]/28 via-[46%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/65 via-transparent to-[#080706]/22" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 80% at 66% 50%, transparent 32%, rgba(5,3,1,0.62) 100%)" }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.05, 0.22, 0.05], x: [0, 28, 0] }}
            transition={{ duration: 24, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" }}
            style={{ background: "radial-gradient(ellipse 55% 65% at 60% 50%, rgba(195,108,12,0.3) 0%, transparent 68%)" }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.03, 0.16, 0.03], x: [0, -20, 0] }}
            transition={{ duration: 32, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 8 }}
            style={{ background: "radial-gradient(ellipse 48% 58% at 72% 55%, rgba(165,88,8,0.22) 0%, transparent 64%)" }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              background: "radial-gradient(ellipse 28% 38% at 67% 49%, rgba(230,145,20,0.48) 0%, transparent 60%)",
              transformOrigin: "67% 49%",
            }}
            animate={{ opacity: [0.04, 0.36, 0.04], scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 10, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 2 }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              background: "radial-gradient(ellipse 18% 30% at 90% 38%, rgba(220,160,30,0.3) 0%, transparent 65%)",
              transformOrigin: "90% 38%",
            }}
            animate={{ opacity: [0.0, 0.22, 0.0] }}
            transition={{ duration: 7, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 3 }}
          />
        </div>

        {/* Left content */}
        <div className="relative z-20 flex flex-col px-16 lg:px-24 xl:px-32 max-w-[52%]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE_OUT }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.div
              className="h-px bg-stone/40"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <span className="text-stone/65 tracking-[0.35em] uppercase font-sans" style={{ fontSize: "13px" }}>
              Maison YS — Nice, Côte d'Azur
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-stone font-serif leading-[1.0] tracking-[0.06em] uppercase mb-5"
            style={{ fontSize: "clamp(3.2rem, 5.8vw, 5.5rem)" }}
          >
            Rare par<br />nature.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE_OUT }}
            className="font-serif italic mb-5"
            style={{ color: "#C9A84C", fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}
          >
            Raffiné avec intention.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE_OUT }}
            className="text-stone/45 mb-14 leading-relaxed"
            style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)" }}
          >
            Extraits de parfum de niche, inspirés par l'élégance<br className="hidden lg:block" /> intemporelle de la Côte d'Azur.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: EASE_OUT }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link href="/collection">
              <motion.span
                whileHover={{ y: -2, borderColor: "rgba(201,168,76,0.7)", boxShadow: "0 0 24px rgba(180,120,20,0.2)" }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase text-stone border border-stone/50 px-9 py-4 cursor-pointer"
                style={{ display: "inline-flex" }}
                role="link"
              >
                Découvrir la Collection
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5, ease: EASE_IN_OUT, repeat: Infinity, delay: 2 }}
                >
                  <ArrowRight size={11} aria-hidden="true" />
                </motion.span>
              </motion.span>
            </Link>

            <a
              href="https://wa.me/33626070850?text=Bonjour%2C+je+souhaite+d%C3%A9couvrir+la+collection+Maison+YS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-80"
              style={{ color: "#C9A84C" }}
              aria-label="Commander sur WhatsApp"
            >
              <span className="w-5 h-px bg-gold/60" />
              Commander sur WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, delay: 2.2, repeat: Infinity, repeatDelay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          aria-hidden="true"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 to-gold/50" />
        </motion.div>
      </motion.section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-obsidian border-b border-white/5 py-7" aria-label="Nos engagements">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/8">
            {trustPillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex items-center gap-4 md:justify-center md:px-10"
              >
                <span className="flex-shrink-0">{p.icon}</span>
                <div>
                  <p className="text-stone text-xs tracking-[0.2em] uppercase font-medium">{p.label}</p>
                  <p className="text-stone/35 text-[10px] tracking-widest mt-0.5">{p.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="py-40 bg-stone w-full" aria-labelledby="brand-statement-heading">
        <div className="container mx-auto px-8 text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-20 bg-gold/40 mb-16" aria-hidden="true" />
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-8">La Maison</p>
            <h2
              id="brand-statement-heading"
              className="text-obsidian text-2xl md:text-4xl font-serif leading-relaxed mb-10"
            >
              « Le luxe ne se crie pas.<br />Il se ressent. »
            </h2>
            <p className="text-obsidian/55 tracking-widest uppercase text-xs leading-loose max-w-sm">
              Extraits de parfum rares, élaborés pour ceux qui comprennent<br />
              la différence entre porter un parfum et incarner une présence.
            </p>
            <div className="w-px h-10 bg-gold/25 mt-14" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* ─── LA SÉLECTION ─── */}
      <section className="py-32 bg-obsidian text-stone w-full" aria-labelledby="selection-heading">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4"
          >
            <div>
              <p className="text-gold/60 tracking-[0.3em] uppercase text-xs mb-4">Sélection exclusive</p>
              <h2 id="selection-heading" className="text-4xl md:text-5xl font-serif">La Sélection</h2>
            </div>
            <Link href="/collection">
              <span className="group flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-stone/50 hover:text-gold transition-colors cursor-pointer pb-1 border-b border-stone/20">
                Voir toute la collection <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {featuredFragrances.map((fragrance, i) => (
              <motion.div
                key={fragrance.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                  <article aria-label={`${fragrance.name} — ${fragrance.family}`}>
                    <div className="aspect-[3/4] overflow-hidden bg-stone/5 mb-6 relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" aria-hidden="true" />
                      <img
                        src={productImages[fragrance.imageKey]}
                        alt={`${fragrance.name} — Extrait de Parfum ${fragrance.family}, 50 ML — Maison YS`}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
                        style={{ objectPosition: "center 15%" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="px-2 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-gold/60">{fragrance.family}</p>
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors duration-500">{fragrance.name}</h3>
                      <p className="text-xs tracking-widest text-stone/30">{fragrance.volume} — Extrait de Parfum</p>
                      <p className="text-gold font-serif text-base mt-1">{FRAGRANCE_PRICE}</p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA secondaire WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 pt-12 border-t border-white/8"
          >
            <p className="text-stone/35 text-xs tracking-widest uppercase">Commander directement</p>
            <a
              href="https://wa.me/33626070850?text=Bonjour%2C+je+souhaite+passer+commande+sur+Maison+YS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-7 py-3 hover:bg-gold hover:text-obsidian transition-all duration-500"
              aria-label="Commander sur WhatsApp"
            >
              Commander sur WhatsApp <ArrowRight size={10} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── COLLECTIONS TILES ─── */}
      <section className="py-32 bg-stone" aria-labelledby="collections-heading">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-5">Trois univers olfactifs</p>
            <h2 id="collections-heading" className="text-3xl md:text-4xl font-serif text-obsidian">Nos Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, i) => {
              const firstFrag = fragrances.find(f => f.collectionKey === col.key)!;
              return (
                <motion.div
                  key={col.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="group"
                >
                  <Link href={`/collection#${col.key}`}>
                    <article className="cursor-pointer" aria-label={col.name}>
                      <div className="aspect-[4/5] overflow-hidden bg-obsidian mb-6 relative">
                        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/10 transition-all duration-700 z-10" aria-hidden="true" />
                        <img
                          src={productImages[firstFrag.imageKey]}
                          alt={`${col.name} — ${col.tagline}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          style={{ objectPosition: "center 15%" }}
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="w-6 h-px bg-gold/60 mb-3" aria-hidden="true" />
                          <h3 className="font-serif text-stone text-xl mb-1">{col.name}</h3>
                          <p className="text-stone/50 text-xs tracking-widest">{col.tagline}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── GIFTING ─── */}
      <section className="py-32 bg-obsidian text-stone w-full" aria-labelledby="gifting-heading">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-gold/60 tracking-[0.3em] uppercase text-xs mb-6">Offrir la distinction</p>
              <h2 id="gifting-heading" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Le Don de la<br />Pure Opulence
              </h2>
              <p className="text-stone/50 leading-relaxed mb-12 max-w-sm text-sm">
                Habillés de textures sombres et signés de notre emblème doré, nos coffrets transforment l'acte d'offrir en rituel inoubliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/gifting">
                  <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                    Voir les coffrets <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
                <a
                  href="tel:+33626070850"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-stone/40 hover:text-gold transition-colors"
                  aria-label="Appeler Maison YS"
                >
                  +33 6 26 07 08 50
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gold/5 translate-x-3 translate-y-3" aria-hidden="true" />
              <img
                src={baccaratGiftImg}
                alt="Coffret cadeau Maison YS — parfum de luxe Nice Côte d'Azur"
                className="relative z-10 w-full h-full object-cover border border-white/5"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BRAND PILLARS ─── */}
      <section className="py-28 bg-stone" aria-labelledby="brand-pillars-heading">
        <div className="container mx-auto px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-obsidian/35 tracking-[0.3em] uppercase text-xs mb-4">Notre philosophie</p>
            <h2 id="brand-pillars-heading" className="text-3xl font-serif text-obsidian">
              Maison YS transforme le parfum en empreinte.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
            {[
              {
                num: "01",
                title: "Rareté",
                text: "Chaque fragrance est choisie pour son caractère singulier — des compositions qui ne ressemblent à aucune autre.",
              },
              {
                num: "02",
                title: "Concentration",
                text: "Extrait de Parfum uniquement. La concentration la plus haute. La présence la plus longue.",
              },
              {
                num: "03",
                title: "Ancrage",
                text: "Née à Nice, au cœur de la Côte d'Azur. Disponible en boutique et sur commande directe.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <span className="text-gold/30 font-serif text-4xl mb-6 tracking-widest">{val.num}</span>
                <div className="w-px h-8 bg-gold/30 mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl text-obsidian mb-4">{val.title}</h3>
                <p className="text-obsidian/50 leading-relaxed text-sm max-w-xs">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-40 bg-obsidian text-stone text-center" aria-labelledby="cta-heading">
        <div className="container mx-auto px-8 max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gold/40 mb-16" aria-hidden="true" />
            <p className="text-gold/50 tracking-[0.3em] uppercase text-xs mb-6">Une présence. Une signature.</p>
            <h2 id="cta-heading" className="text-2xl md:text-4xl font-serif mb-6 leading-relaxed">
              Votre signature olfactive<br />vous attend.
            </h2>
            <p className="text-stone/40 text-sm mb-14 max-w-xs leading-relaxed">
              Découvrez nos extraits de parfum. Disponible en boutique à Nice ou sur commande directe.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="/collection">
                <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase bg-gold text-obsidian px-10 py-4 hover:bg-stone hover:text-obsidian transition-all duration-700 cursor-pointer font-medium">
                  Explorer la Collection <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
              <a
                href="https://wa.me/33626070850?text=Bonjour%2C+je+souhaite+d%C3%A9couvrir+la+collection+Maison+YS."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-stone/45 hover:text-gold transition-colors border-b border-stone/20 pb-1"
                aria-label="Contacter Maison YS sur WhatsApp"
              >
                Commander sur WhatsApp
              </a>
            </div>

            {/* Contact rapide */}
            <div className="mt-16 pt-12 border-t border-white/8 flex flex-col sm:flex-row items-center gap-8">
              <a href="tel:+33626070850" className="text-stone/30 hover:text-gold transition-colors text-xs tracking-widest" aria-label="Appeler Maison YS">
                +33 6 26 07 08 50
              </a>
              <span className="hidden sm:block text-stone/15">·</span>
              <a href="mailto:maisonys06@gmail.com" className="text-stone/30 hover:text-gold transition-colors text-xs tracking-widest" aria-label="Envoyer un email à Maison YS">
                maisonys06@gmail.com
              </a>
              <span className="hidden sm:block text-stone/15">·</span>
              <a href="https://www.maison-ys.com" className="text-stone/30 hover:text-gold transition-colors text-xs tracking-widest">
                maison-ys.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
