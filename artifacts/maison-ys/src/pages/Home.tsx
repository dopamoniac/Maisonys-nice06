import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroDesktopImg from "@assets/upscalecover_1776804479421.png";
import heroMobileImg from "@assets/abc-mobile_(1)_1776804978771.png";
import { baccaratGiftImg, productImages } from "@/lib/images";
import { fragrances, collections } from "@/lib/data";

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

// Desktop: slow cinematic Ken Burns — scale + drift, mirror so no hard loop reset
const kenBurnsDesktop = {
  animate: { scale: [1, 1.045], x: [0, -14], y: [0, -9] },
  transition: { duration: 30, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" as const },
};

// Mobile: scale-only Ken Burns, no x drift — keeps bottle centred
const kenBurnsMobile = {
  animate: { scale: [1, 1.03], y: [0, -6] },
  transition: { duration: 28, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" as const },
};

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

      {/* ─── HERO ─── */}

      {/* ── MOBILE HERO (below md) ── */}
      <section className="md:hidden relative h-[100dvh] w-full overflow-hidden bg-[#1c0e04] flex flex-col">
        {/* ── Atmospheric image stack ── */}
        <div className="absolute inset-0 z-0">

          {/* Base image — slow Ken Burns */}
          <motion.div
            className="absolute inset-[-5%]"
            animate={kenBurnsMobile.animate}
            transition={kenBurnsMobile.transition}
          >
            <img
              src={heroMobileImg}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </motion.div>

          {/* Text-side legibility gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c0e04]/82 from-[8%] via-[#1c0e04]/28 via-[42%] to-transparent" />
          {/* Top vignette */}
          <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#1c0e04]/55 to-transparent" />
          {/* Bottom depth vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1c0e04]/50 to-transparent" />

          {/* Deep radial vignette — adds bottle depth, editorial shadow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 85% 85% at 65% 55%, transparent 38%, rgba(8,5,2,0.55) 100%)" }}
          />

          {/* Atmosphere layer 1: warm amber haze drift — slow, mirrored */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.06, 0.2, 0.06], x: [0, 18, 0] }}
            transition={{ duration: 22, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" }}
            style={{ background: "radial-gradient(ellipse 60% 55% at 62% 52%, rgba(190,105,12,0.28) 0%, transparent 68%)" }}
          />

          {/* Atmosphere layer 2: secondary haze — different phase, drifts opposite */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.04, 0.14, 0.04], x: [0, -12, 0] }}
            transition={{ duration: 28, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 6 }}
            style={{ background: "radial-gradient(ellipse 45% 50% at 70% 60%, rgba(160,85,8,0.2) 0%, transparent 62%)" }}
          />

          {/* Amber bottle glow — breathes on its own cadence */}
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

        {/* Content — left-aligned, vertically centered */}
        <div className="relative z-20 flex flex-col justify-center flex-1 pt-6 px-7 w-[58%]">

          {/* Label with dash */}
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

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-stone font-serif leading-[0.95] tracking-[0.03em] uppercase mb-6"
            style={{ fontSize: "clamp(2.8rem, 12vw, 3.8rem)" }}
          >
            Rare par<br />nature.
          </motion.h1>

          {/* Italic gold subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE_OUT }}
            className="font-serif italic mb-9"
            style={{ color: "#C9A84C", fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)" }}
          >
            Raffiné avec intention.
          </motion.p>

          {/* CTA — premium hover */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: EASE_OUT }}
          >
            <Link href="/collection">
              <motion.span
                whileHover={{ y: -1, borderColor: "rgba(201,168,76,0.65)", boxShadow: "0 0 18px rgba(180,120,20,0.18)" }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-4 text-[9px] tracking-[0.2em] uppercase text-stone border border-stone/40 px-6 py-3.5 cursor-pointer whitespace-nowrap"
                style={{ display: "inline-flex" }}
              >
                Découvrir la Collection
                <ArrowRight size={9} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DESKTOP HERO (md+) ── */}
      <motion.section
        className="hidden md:flex relative h-[100dvh] w-full overflow-hidden bg-[#080706] items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Atmospheric image stack ── */}
        <div className="absolute inset-0 z-0">

          {/* Base image — Ken Burns drift + spring mouse parallax on top */}
          <motion.div
            className="absolute inset-[-6%]"
            style={{ x: imgParallaxX, y: imgParallaxY }}
            animate={kenBurnsDesktop.animate}
            transition={kenBurnsDesktop.transition}
          >
            <img
              src={heroDesktopImg}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "60% center" }}
            />
          </motion.div>

          {/* Text-side legibility gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/82 from-[18%] via-[#080706]/28 via-[46%] to-transparent" />
          {/* Top + bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/65 via-transparent to-[#080706]/22" />

          {/* Deep editorial vignette — pushes bottle into focus, frames the shot */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 80% at 66% 50%, transparent 32%, rgba(5,3,1,0.62) 100%)" }}
          />

          {/* Atmosphere layer 1: primary amber haze — drifts right, long cycle */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.05, 0.22, 0.05], x: [0, 28, 0] }}
            transition={{ duration: 24, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror" }}
            style={{ background: "radial-gradient(ellipse 55% 65% at 60% 50%, rgba(195,108,12,0.3) 0%, transparent 68%)" }}
          />

          {/* Atmosphere layer 2: secondary haze — drifts left, different cadence */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.03, 0.16, 0.03], x: [0, -20, 0] }}
            transition={{ duration: 32, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 8 }}
            style={{ background: "radial-gradient(ellipse 48% 58% at 72% 55%, rgba(165,88,8,0.22) 0%, transparent 64%)" }}
          />

          {/* Atmosphere layer 3: cool dark smoke counter-drift — adds depth dimension */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.0, 0.1, 0.0], x: [0, 14, 0], y: [0, -8, 0] }}
            transition={{ duration: 20, ease: EASE_IN_OUT, repeat: Infinity, repeatType: "mirror", delay: 4 }}
            style={{ background: "radial-gradient(ellipse 40% 45% at 78% 42%, rgba(80,45,5,0.25) 0%, transparent 70%)" }}
          />

          {/* Amber bottle glow — breathes with scale, anchored to bottle light source */}
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

          {/* Secondary warm shimmer — lantern area, right edge */}
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
        <div className="relative z-20 flex flex-col px-16 lg:px-24 xl:px-32 max-w-[55%]">

          {/* Brand label — animated dash line grows in */}
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
              Maison YS — Nice
            </span>
          </motion.div>

          {/* Main headline — elegant upward reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-stone font-serif leading-[1.0] tracking-[0.06em] uppercase mb-6"
            style={{ fontSize: "clamp(3.2rem, 5.8vw, 5.5rem)" }}
          >
            Rare par<br />nature.
          </motion.h1>

          {/* Italic gold subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.75, ease: EASE_OUT }}
            className="font-serif italic mb-16"
            style={{ color: "#C9A84C", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
          >
            Raffiné avec intention.
          </motion.p>

          {/* CTA — premium hover lift + glow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: EASE_OUT }}
          >
            <Link href="/collection">
              <motion.span
                whileHover={{ y: -2, borderColor: "rgba(201,168,76,0.7)", boxShadow: "0 0 24px rgba(180,120,20,0.2)" }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase text-stone border border-stone/50 px-9 py-4 cursor-pointer"
                style={{ display: "inline-flex" }}
              >
                Découvrir la Collection
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5, ease: EASE_IN_OUT, repeat: Infinity, delay: 2 }}
                >
                  <ArrowRight size={11} />
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator — slow fade-in loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, delay: 2.2, repeat: Infinity, repeatDelay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 to-gold/50" />
        </motion.div>
      </motion.section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="py-40 bg-stone w-full">
        <div className="container mx-auto px-8 text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-20 bg-gold/40 mb-16" />
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-8">La Maison</p>
            <h2 className="text-obsidian text-2xl md:text-4xl font-serif leading-relaxed mb-10">
              « L'art de l'invisible.<br />Le don de la présence. »
            </h2>
            <p className="text-obsidian/55 tracking-widest uppercase text-xs leading-loose max-w-sm">
              Des extraits de parfum rares, élaborés pour ceux qui comprennent la différence entre porter un parfum et incarner une présence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── LA SÉLECTION ─── */}
      <section className="py-32 bg-obsidian text-stone w-full">
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
              <h2 className="text-4xl md:text-5xl font-serif">La Sélection</h2>
            </div>
            <Link href="/collection">
              <span className="group flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-stone/50 hover:text-gold transition-colors cursor-pointer pb-1 border-b border-stone/20">
                Voir toute la collection <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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
                  <div>
                    <div className="aspect-[3/4] overflow-hidden bg-stone/5 mb-6 relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <img
                        src={productImages[fragrance.imageKey]}
                        alt={fragrance.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
                        style={{ objectPosition: "center 15%" }}
                      />
                    </div>
                    <div className="px-2 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-gold/60">{fragrance.family}</p>
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors duration-500">{fragrance.name}</h3>
                      <p className="text-xs tracking-widest text-stone/30">{fragrance.volume}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLECTIONS TILES ─── */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-5">Trois univers</p>
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian">Nos Collections</h2>
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
                    <div className="cursor-pointer">
                      <div className="aspect-[4/5] overflow-hidden bg-obsidian mb-6 relative">
                        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/10 transition-all duration-700 z-10" />
                        <img
                          src={productImages[firstFrag.imageKey]}
                          alt={col.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          style={{ objectPosition: "center 15%" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="w-6 h-px bg-gold/60 mb-3" />
                          <h3 className="font-serif text-stone text-xl mb-1">{col.name}</h3>
                          <p className="text-stone/50 text-xs tracking-widest">{col.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── GIFTING ─── */}
      <section className="py-32 bg-obsidian text-stone w-full">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-gold/60 tracking-[0.3em] uppercase text-xs mb-6">Offrir la distinction</p>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Le Don de la<br />Pure Opulence
              </h3>
              <p className="text-stone/50 leading-relaxed mb-12 max-w-sm text-sm">
                Encaissés dans des textures de marbre sombre et signés de notre sceau doré, nos coffrets transforment l'acte d'offrir en rituel inoubliable.
              </p>
              <Link href="/gifting">
                <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                  Voir les coffrets <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gold/5 translate-x-3 translate-y-3" />
              <img
                src={baccaratGiftImg}
                alt="Coffret Maison YS"
                className="relative z-10 w-full h-full object-cover border border-white/5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-40 bg-stone text-obsidian text-center">
        <div className="container mx-auto px-8 max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gold/40 mb-16" />
            <h2 className="text-2xl md:text-4xl font-serif mb-12 leading-relaxed">
              Votre signature olfactive<br />vous attend.
            </h2>
            <Link href="/collection">
              <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase bg-obsidian text-stone px-10 py-4 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                Explorer la Collection <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}