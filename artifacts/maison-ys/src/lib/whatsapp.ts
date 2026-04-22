export const WHATSAPP_NUMBER = "33626070850";

export function buildWhatsAppMessage(productName?: string | null): string {
  if (productName && productName.trim().length > 0) {
    return `Bonjour, je voulais acheter le produit ${productName}. Pouvez-vous m'aider ?`;
  }
  return "Bonjour, je voudrais plus d'informations sur vos produits.";
}

export function buildWhatsAppUrl(productName?: string | null): string {
  const text = encodeURIComponent(buildWhatsAppMessage(productName));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
