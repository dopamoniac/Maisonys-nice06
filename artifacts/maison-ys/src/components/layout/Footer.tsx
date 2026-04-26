import { Link } from "wouter";
import { logoImg } from "@/lib/images";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-stone border-t border-white/5 py-20" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-6">
            <Link href="/">
              <img
                src={logoImg}
                alt="Maison YS — Extraits de Parfum, Nice Côte d'Azur"
                className="h-16 w-auto object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-stone/45 max-w-xs leading-relaxed">
              Maison YS — extraits de parfum de niche, nés à Nice, Côte d'Azur.
              Des fragrances qui existent à l'intersection du souvenir et du désir.
            </p>
            <a
              href="https://www.maison-ys.com"
              className="text-xs tracking-widest text-gold/50 hover:text-gold transition-colors"
              aria-label="Site officiel Maison YS"
            >
              www.maison-ys.com
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">Explorer</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/collection"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/45">Collection</span></Link></li>
              <li><Link href="/maison"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/45">La Maison</span></Link></li>
              <li><Link href="/gifting"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/45">Coffrets</span></Link></li>
              <li><Link href="/contact"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/45">Contact</span></Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic flex flex-col gap-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-1">Nous Joindre</h4>
            <a
              href="tel:+33626070850"
              className="text-xs tracking-widest hover:text-gold transition-colors text-stone/45"
              aria-label="Téléphone Maison YS"
            >
              +33 6 26 07 08 50
            </a>
            <a
              href="mailto:maisonys06@gmail.com"
              className="text-xs tracking-widest hover:text-gold transition-colors text-stone/45"
              aria-label="Email Maison YS"
            >
              maisonys06@gmail.com
            </a>
            <p className="text-xs text-stone/35 leading-relaxed">
              2 bd Raimbaldi<br />Nice, 06000 — Côte d'Azur
            </p>
            <a
              href="https://wa.me/33626070850?text=Bonjour%2C+je+souhaite+d%C3%A9couvrir+la+collection+Maison+YS."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:text-gold transition-colors text-stone/45 mt-1"
              aria-label="Commander sur WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572084282268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:text-gold transition-colors text-stone/45"
              aria-label="Page Facebook Maison YS"
            >
              Facebook
            </a>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest text-stone/20 uppercase">
            &copy; {year} Maison YS. Tous droits réservés.
          </p>
          <p className="text-xs tracking-widest text-stone/20 uppercase">Nice, Côte d'Azur — France</p>
        </div>
      </div>
    </footer>
  );
}
