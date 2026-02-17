// Categorías estratégicas del negocio
export type ServiceCategory =
  | "emergencia"
  | "residencial"
  | "automotriz"
  | "comercial";

// Entidad Servicio (estructura inmutable del dominio)
export type Service = {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  isHighlighted: boolean;
  image?: string;
};
