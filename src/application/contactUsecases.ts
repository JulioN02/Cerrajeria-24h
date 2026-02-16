import type { BusinessConfig } from "../domain/businessTypes";
import {
  sanitizeMessage,
  isValidContactMessage,
  isValidPhoneNumber
} from "../domain/contactRules";

/**
 * Genera enlace WhatsApp listo para usar.
 */
export const generateWhatsAppLink = (
  business: BusinessConfig,
  message: string
): string | null => {
  if (!isValidContactMessage(message)) return null;
  if (!isValidPhoneNumber(business.whatsapp)) return null;

  const sanitized = sanitizeMessage(message);
  const encodedMessage = encodeURIComponent(sanitized);

  return `https://wa.me/${business.whatsapp}?text=${encodedMessage}`;
};

/**
 * Genera enlace telefónico seguro.
 */
export const generatePhoneLink = (
  business: BusinessConfig
): string | null => {
  if (!isValidPhoneNumber(business.phone)) return null;

  return `tel:${business.phone}`;
};
