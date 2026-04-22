import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { logoImg } from "@/lib/images";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collection", path: "/collection" },
    { name: "La Maison", path: "/maison" },
    { name: "Coffrets", path: "/gifting" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location === "/";
  const navbarBg = isScrolled || !isHome
    ? "bg-obsidian/95 backdrop-blur-sm border-b border-white/5"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navbarBg}`}>
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo — transparent PNG, full brand mark */}
        <Link href="/">
          <div className="flex items-center cursor-pointer group">
            <img
              src={logoImg}
              alt="Maison YS"
              className="h-20 lg:h-24 w-auto object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-sm"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 hover:text-gold cursor-pointer ${
                location === link.path ? "text-gold" : "text-stone"
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-stone hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-24 bg-obsidian z-40 flex flex-col items-center justify-center gap-10"
          >
            <img src={logoImg} alt="Maison YS" className="h-24 w-auto object-contain mb-6 opacity-80" />
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-300 hover:text-gold cursor-pointer ${
                    location === link.path ? "text-gold" : "text-stone"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}