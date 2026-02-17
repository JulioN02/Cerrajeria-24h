import type { BusinessConfig } from "../../domain/businessTypes";

export const renderFooter = (
  business: BusinessConfig
): void => {
  const footer = document.querySelector<HTMLElement>(".site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-grid container">
      <div class="footer-brand-section">
        <h4 class="footer-brand-title">${business.businessName}</h4>
        <p class="footer-tagline">Seguridad y confianza en Valledupar. Expertos en cerrajería técnica y de emergencia con disponibilidad total.</p>
      </div>

      <div class="footer-info-section">
        <h5 class="footer-subtitle">Servicios Principales</h5>
        <ul class="footer-info-list">
          <li>Apertura de Puertas</li>
          <li>Cerrajería Automotriz</li>
          <li>Cajas Fuertes</li>
          <li>Cambio de Guardas</li>
        </ul>
      </div>

      <div class="footer-contact-section">
        <h5 class="footer-subtitle">Atención Inmediata</h5>
        <p class="footer-contact-item">📍 Valledupar, Cesar</p>
        <p class="footer-contact-item">⏰ 24 Horas - 7 Días</p>
        <p class="footer-contact-item">🚀 Llegada en ${business.responseTimeMinutes} min aproximadamente</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="footer-copyright">
          © ${new Date().getFullYear()} ${business.businessName}. Todos los derechos reservados. 
          <span class="footer-legal">Seguridad técnica profesional.</span>
        </p>
      </div>
    </div>
  `;
};
