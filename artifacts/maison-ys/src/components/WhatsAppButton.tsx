import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  productName?: string | null;
  label?: string;
  variant?: "dark" | "light";
  className?: string;
};

export default function WhatsAppButton({
  productName,
  label = "WhatsApp",
  variant = "dark",
  className = "",
}: Props) {
  const href = buildWhatsAppUrl(productName);

  const base =
    "group inline-flex items-center justify-center gap-4 px-8 py-4 tracking-[0.25em] uppercase text-xs transition-all duration-700 cursor-pointer border";
  const styles =
    variant === "dark"
      ? "bg-obsidian text-stone border-gold/30 hover:bg-gold hover:text-obsidian hover:border-gold"
      : "bg-transparent text-obsidian border-obsidian/30 hover:bg-obsidian hover:text-gold hover:border-obsidian";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Maison YS sur WhatsApp"
      className={`${base} ${styles} ${className}`}
    >
      <FaWhatsapp
        size={16}
        className={
          variant === "dark"
            ? "text-gold group-hover:text-obsidian transition-colors duration-700"
            : "text-gold group-hover:text-gold transition-colors duration-700"
        }
      />
      <span>{label}</span>
    </a>
  );
}
