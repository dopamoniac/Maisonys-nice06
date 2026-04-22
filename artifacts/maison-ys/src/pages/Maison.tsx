import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroProductImg from "@assets/ys.jpeg";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Maison() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT },
    },
  };

  return (
    <div className="w-full bg-stone min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
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
          >
            <source src="/logvd.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-obsidian/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone/30 via-transparent to-transparent z-10" />
        </motion.div>

        <div className="relative z-20 px-8 md:px-16 pb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-gold/60" />
            <p className="text-stone/60 tracking-[0.35em] uppercase text-xs">
              Nice, France
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 container mx-auto px-8 max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gold/40 mb-14" />
          <h2 className="text-2xl md:text-4xl font-serif text-obsidian leading-relaxed mb-12">
            Une sélection des parfums les plus désirables au monde.
          </h2>

          <div className="space-y-8 text-obsidian/55 leading-relaxed text-base md:text-lg">
            <p>
              Maison YS est née d'une vision singulière : traiter le parfum non
              pas comme un accessoire, mais comme l'expression la plus intime de
              l'identité.
            </p>
            <p>
              Nous sélectionnons les matières premières les plus rares — des
              forêts d'oud ancestrales aux champs de jasmin baignés de soleil —
              pour créer des compositions qui s'imposent sans jamais s'imposer.
            </p>
            <p>
              Chaque flacon portant notre sceau doré est un Extrait de Parfum,
              formulé à la concentration la plus haute pour une présence durable
              et inoubliable.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Visual interlude */}
      <section className="h-[60vh] bg-obsidian relative overflow-hidden">
        <img
          src={heroProductImg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian" />

        <div className="absolute inset-0 flex items-center justify-center px-8">
          <h3 className="text-stone text-2xl md:text-4xl font-serif italic text-center max-w-2xl leading-relaxed">
            « La signature invisible qui perdure longtemps après votre passage. »
          </h3>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          >
            {[
              {
                title: "Rareté",
                text: "Chaque fragrance de notre collection est sélectionnée pour son caractère unique et son prestige inégalé.",
              },
              {
                title: "Artisanat",
                text: "Des Extraits de Parfum formulés à la concentration maximale pour une expérience sensorielle d'exception.",
              },
              {
                title: "Excellence",
                text: "Disponible à Nice, Maison YS apporte la haute parfumerie internationale au cœur de la Côte d'Azur.",
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
                <div className="w-px h-12 bg-gold/40 mb-8" />
                <h3 className="font-serif text-xl text-obsidian mb-4">
                  {val.title}
                </h3>
                <p className="text-obsidian/50 leading-relaxed text-sm max-w-xs">
                  {val.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}