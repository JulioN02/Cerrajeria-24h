import type { BusinessConfig } from "../../domain/businessTypes";
import { generateWhatsAppLink } from "../../application/contactUsecases";
import { dom } from "../dom";

export const registerFloatingWhatsApp = (
  business: BusinessConfig
): void => {
  if (!dom.floatingWhatsapp) return;

  const link = generateWhatsAppLink(
    business,
    "Hola, necesito información urgente."
  );

  if (link) {
    dom.floatingWhatsapp.href = link;
  }
};
