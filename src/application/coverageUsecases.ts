import type { BusinessConfig } from "../domain/businessTypes";

/**
 * Retorna zonas cubiertas.
 */
export const getCoverageAreas = (
  business: BusinessConfig
): string[] => {
  return business.coverageAreas;
};

/**
 * Retorna tiempo estimado de respuesta formateado.
 */
export const getFormattedResponseTime = (
  business: BusinessConfig
): string => {
  return `${business.responseTimeMinutes} minutos`;
};
