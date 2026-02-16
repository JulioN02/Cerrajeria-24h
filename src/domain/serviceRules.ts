import type { Service, ServiceCategory } from "./servicesTypes";

/**
 * Obtiene el servicio destacado.
 * Si hay múltiples, retorna el primero.
 */
export const getHighlightedService = (
  services: Service[]
): Service | null => {
  const highlighted = services.find(service => service.isHighlighted);
  return highlighted ?? null;
};

/**
 * Filtra servicios por categoría.
 */
export const filterServicesByCategory = (
  services: Service[],
  category: ServiceCategory
): Service[] => {
  return services.filter(service => service.category === category);
};

/**
 * Valida que exista al menos un servicio destacado.
 */
export const hasHighlightedService = (
  services: Service[]
): boolean => {
  return services.some(service => service.isHighlighted);
};
