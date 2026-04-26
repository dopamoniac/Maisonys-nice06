import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroProductImg from "@assets/ys.jpeg";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

export default function Maison() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };

  return (
    <div className="w-full bg-stone min-h-screen pt-20">

      {/* Hero — vidéo avec overlay */}
      <section className="relative h-[70vh] flex items-end overflow-hidden" aria-label="La Maison YS">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            aria-hidden="true"
          >
            <source src="/logvd.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-obsidian/50 z-10" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent z-10" aria-hidden="true" />
        </motion.div>

        <div className="relative z-20 px-8 md:px-16 pb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-gold/60" aria-hidden="true" />
            <p className="text-stone/60 tracking-[0.35em] uppercase text-xs">
              Nice, Côte d'Azur — France
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-stone"
          >
            La Maison
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-stone/50 font-serif italic text-lg md:text-xl mt-4"
          >
            Une présence. Une signature.
          </motion.p>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-32 container mx-auto px-8 max-w-3xl text-center" aria-labelledby="philosophy-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gold/40 mb-14" aria-hidden="true" />
          <p className="text-obsidian/35 tracking-[0.3em] uppercase text-xs mb-8">Notre vision</p>
          <h2
            id="philosophy-heading"
            className="text-2xl md:text-4xl font-serif text-obsidian leading-relaxed mb-12"
          >
            Le parfum n'est pas un accessoire.<br />C'est une identité.
          </h2>

          <div className="space-y-8 text-obsidian/55 leading-relaxed text-base md:text-lg text-left">
            <p>
              Maison YS est née d'une conviction singulière : le parfum est l'expression
              la plus intime de qui l'on est — et de qui l'on veut être.
            </p>
            <p>
              Nous sélectionnons des matières premières d'exception pour créer des
              compositions qui s'imposent sans jamais s'imposer. Des fragrances qui
              accompagnent, qui marquent, qui restent.
            </p>
            <p>
              Chaque flacon portant notre sceau est un Extrait de Parfum formulé à
              la concentration la plus haute — pour une présence durable, profonde,
              et véritablement inoubliable.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Interlude visuel */}
      <section className="h-[60vh] bg-obsidian relative overflow-hidden" aria-hidden="true">
        <img
          src={heroProductImg}
          alt=""
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian" />

        <div className="absolute inset-0 flex items-center justify-center px-8">
          <blockquote>
            <p className="text-stone text-2xl md:text-4xl font-serif italic text-center max-w-2xl leading-relaxed">
              « La signature invisible qui perdure longtemps après votre passage. »
            </p>
          </blockquote>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-32 bg-stone" aria-labelledby="values-heading">
        <div className="container mx-auto px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-obsidian/35 tracking-[0.3em] uppercase text-xs mb-4">Ce qui nous définit</p>
            <h2 id="values-heading" className="text-3xl font-serif text-obsidian">
              Maison YS — Trois principes fondateurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              {
                num: "I",
                title: "Rareté",
                text: "Chaque fragrance est choisie pour son caractère unique — des compositions qui ne ressemblent à aucune autre et qui existent en quantités limitées.",
              },
              {
                num: "II",
                title: "Artisanat",
                text: "Extraits de Parfum formulés à la concentration maximale pour une expérience sensorielle durable. Jamais un compromis sur la qualité.",
              },
              {
                num: "III",
                title: "Excellence",
                text: "Nés à Nice, au cœur de la Côte d'Azur. Disponibles en boutique et sur commande directe pour une expérience personnalisée.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-gold/30 text-4xl mb-6 tracking-widest">{val.num}</span>
                <div className="w-px h-10 bg-gold/30 mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl text-obsidian mb-4">{val.title}</h3>
                <p className="text-obsidian/50 leading-relaxed text-sm max-w-xs">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-28 bg-obsidian text-stone text-center" aria-labelledby="maison-cta-heading">
        <div className="container mx-auto px-8 max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-12 bg-gold/35 mb-12" aria-hidden="true" />
            <h2 id="maison-cta-heading" className="text-2xl md:text-3xl font-serif mb-10 leading-relaxed">
              Découvrez notre collection.
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="/collection">
                <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase bg-gold text-obsidian px-10 py-4 hover:bg-stone hover:text-obsidian transition-all duration-700 cursor-pointer font-medium">
                  Voir les parfums <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-xs tracking-[0.2em] uppercase text-stone/40 hover:text-gold transition-colors border-b border-stone/20 pb-1 cursor-pointer">
                  Nous Contacter
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
