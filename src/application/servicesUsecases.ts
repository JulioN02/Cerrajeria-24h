import type { Service, ServiceCategory } from "../domain/servicesTypes";
import {
  getHighlightedService,
  filterServicesByCategory
} from "../domain/serviceRules";

/**
 * Retorna todos los servicios.
 * (En v2 podría provenir de API REST)
 */
export const getAllServices = (
  services: Service[]
): Service[] => {
  return services;
};

/**
 * Retorna servicios filtrados por categoría.
 */
export const getServicesByCategory = (
  services: Service[],
  category: ServiceCategory
): Service[] => {
  return filterServicesByCategory(services, category);
};

/**
 * Obtiene servicio destacado listo para UI.
 */
export const getHighlightedServiceForUI = (
  services: Service[]
): Service | null => {
  return getHighlightedService(services);
};
