import type { BusinessConfig } from "../../domain/businessTypes";
import { generatePhoneLink, generateWhatsAppLink } from "../../application/contactUsecases";
import { dom } from "../dom";

export const renderFooter = (
  business: BusinessConfig
): void => {
  const footer = document.querySelector<HTMLElement>("#footer");
  if (!footer) return;

  const phoneLink = generatePhoneLink(business);
  const whatsappLink = generateWhatsAppLink(
    business,
    "Necesito información sobre sus servicios."
  );

  footer.innerHTML = `
    <div class="footer-content">
      <h4>${business.businessName}</h4>

      <p>Atención 24 horas</p>
      <p>Tiempo estimado de llegada: ${business.responseTimeMinutes} minutos</p>

      <div class="footer-actions">
        ${
          phoneLink
            ? `<a href="${phoneLink}" class="footer-link">Llamar</a>`
            : ""
        }
        ${
          whatsappLink
            ? `<a href="${whatsappLink}" class="footer-link">WhatsApp</a>`
            : ""
        }
      </div>

      <small>© ${new Date().getFullYear()} ${business.businessName}. Todos los derechos reservados.</small>
    </div>
  `;
};
