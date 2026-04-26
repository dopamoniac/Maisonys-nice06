import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    // Fallback mailto (no backend required)
    const subject = encodeURIComponent(`Message de ${name} — Maison YS`);
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`);
    window.location.href = `mailto:maisonys06@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-stone min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="w-px h-12 bg-obsidian/15 mb-8" aria-hidden="true" />
          <p className="text-obsidian/35 tracking-[0.3em] uppercase text-xs mb-5">Maison YS</p>
          <h1 className="text-4xl md:text-6xl font-serif text-obsidian mb-4">
            Contactez<br className="md:hidden" /> La Maison
          </h1>
          <p className="text-obsidian/45 text-sm max-w-sm leading-relaxed text-center mt-2">
            Commandes, conseils olfactifs, coffrets sur mesure — notre équipe est à votre écoute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Coordonnées */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-xs tracking-widest uppercase text-gold mb-1">Téléphone</h2>
                  <a
                    href="tel:+33626070850"
                    className="text-obsidian font-serif text-xl hover:text-gold transition-colors"
                    aria-label="Appeler Maison YS"
                  >
                    +33 6 26 07 08 50
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={16} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-xs tracking-widest uppercase text-gold mb-1">Email</h2>
                  <a
                    href="mailto:maisonys06@gmail.com"
                    className="text-obsidian font-serif text-xl hover:text-gold transition-colors"
                    aria-label="Envoyer un email à Maison YS"
                  >
                    maisonys06@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe size={16} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-xs tracking-widest uppercase text-gold mb-1">Site Web</h2>
                  <a
                    href="https://www.maison-ys.com"
                    className="text-obsidian font-serif text-xl hover:text-gold transition-colors"
                    aria-label="Site officiel Maison YS"
                  >
                    www.maison-ys.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-xs tracking-widest uppercase text-gold mb-1">Adresse</h2>
                  <address className="not-italic text-obsidian font-serif text-lg leading-relaxed">
                    2 bd Raimbaldi<br />
                    Nice, 06000<br />
                    Côte d'Azur, France
                  </address>
                </div>
              </div>

              <div>
                <h2 className="text-xs tracking-widest uppercase text-gold mb-3">Réseaux Sociaux</h2>
                <div className="flex gap-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61572084282268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-obsidian font-serif text-lg hover:text-gold transition-colors"
                    aria-label="Page Facebook Maison YS"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-12 pt-10 border-t border-obsidian/10">
              <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Réponse rapide garantie
              </h2>
              <p className="text-obsidian/50 text-sm leading-relaxed mb-6 max-w-sm">
                Pour une réponse personnalisée dans les plus brefs délais, contactez-nous directement sur WhatsApp.
              </p>
              <WhatsAppButton label="Écrire sur WhatsApp" />
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-obsidian p-8 md:p-12 text-stone"
          >
            <h2 className="text-2xl font-serif text-gold mb-2">Envoyer une Demande</h2>
            <p className="text-stone/35 text-xs tracking-widest mb-8 uppercase">Commande · Conseil · Coffret</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-px h-12 bg-gold/40 mb-8" aria-hidden="true" />
                <p className="font-serif text-gold text-xl mb-3">Message envoyé.</p>
                <p className="text-stone/45 text-sm">Nous vous répondrons dans les meilleurs délais.</p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
                aria-label="Formulaire de contact Maison YS"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs tracking-widest uppercase text-stone/50 mb-2"
                  >
                    Nom <span className="text-gold/60" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors placeholder:text-stone/20"
                    placeholder="Votre nom complet"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs tracking-widest uppercase text-stone/50 mb-2"
                  >
                    Email <span className="text-gold/60" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors placeholder:text-stone/20"
                    placeholder="Votre adresse email"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs tracking-widest uppercase text-stone/50 mb-2"
                  >
                    Message <span className="text-gold/60" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-stone/20"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-obsidian tracking-[0.2em] uppercase text-xs mt-8 hover:bg-stone hover:text-obsidian transition-colors duration-500 font-medium focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  Envoyer le Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
