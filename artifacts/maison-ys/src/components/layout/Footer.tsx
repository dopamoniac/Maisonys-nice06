import { Link } from "wouter";
import { logoImg } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-stone border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-6">
            <Link href="/">
              <img
                src={logoImg}
                alt="Maison YS"
                className="h-16 w-auto object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-stone/50 max-w-xs leading-relaxed">
              Maison YS crée des parfums qui existent à l'intersection du souvenir et du désir.
              Élaborés en quantités limitées pour ceux qui comprennent la différence.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-2">Explorer</h4>
            <Link href="/collection"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/50">Collection</span></Link>
            <Link href="/maison"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/50">La Maison</span></Link>
            <Link href="/gifting"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/50">Coffrets</span></Link>
            <Link href="/contact"><span className="text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer text-stone/50">Contact</span></Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-2">Nous Joindre</h4>
            <a href="tel:+33626070850" className="text-xs tracking-widest hover:text-gold transition-colors text-stone/50">+33 6 26 07 08 50</a>
            <a href="mailto:maisonys06@gmail.com" className="text-xs tracking-widest hover:text-gold transition-colors text-stone/50">maisonys06@gmail.com</a>
            <p className="text-xs text-stone/50">2 bd Raimbaldi, Nice, 06000</p>
            <a
              href="https://www.facebook.com/profile.php?id=61572084282268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase hover:text-gold transition-colors text-stone/50"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest text-stone/25 uppercase">
            &copy; {new Date().getFullYear()} Maison YS. Tous droits réservés.
          </p>
          <p className="text-xs tracking-widest text-stone/25 uppercase">Nice, Côte d'Azur</p>
        </div>
      </div>
    </footer>
  );
}
