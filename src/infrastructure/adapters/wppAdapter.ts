/**
 * Genera URL oficial de WhatsApp.
 */
export const buildWhatsAppURL = (
  phone: string,
  encodedMessage: string
): string => {
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
