export const WHATSAPP_NUMBER = "33626070850";

export function buildWhatsAppMessage(productName?: string | null): string {
  if (productName && productName.trim().length > 0) {
    return `Bonjour, je suis intéressé(e) par ${productName} de Maison YS. Pourriez-vous m'indiquer comment passer commande ?`;
  }
  return "Bonjour, je souhaite découvrir la collection Maison YS. Pourriez-vous m'en dire davantage ?";
}

export function buildWhatsAppUrl(productName?: string | null): string {
  const text = encodeURIComponent(buildWhatsAppMessage(productName));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
