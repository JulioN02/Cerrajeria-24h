import type { BusinessConfig } from "../../domain/businessTypes";
import { generatePhoneLink, generateWhatsAppLink } from "../../application/contactUsecases";
import { dom } from "../dom";

export const renderHero = (
  business: BusinessConfig
): void => {
  if (!dom.heroTitle || !dom.heroCtaCall || !dom.heroCtaWhatsapp) return;

  dom.heroTitle.textContent = `${business.businessName} - Atención 24 Horas`;

  const phoneLink = generatePhoneLink(business);
  const whatsappLink = generateWhatsAppLink(
    business,
    "Necesito un servicio urgente de cerrajería."
  );

  if (phoneLink) dom.heroCtaCall.href = phoneLink;
  if (whatsappLink) dom.heroCtaWhatsapp.href = whatsappLink;
};
