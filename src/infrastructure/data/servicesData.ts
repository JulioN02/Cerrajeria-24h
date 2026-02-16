import type { Service } from "../../domain/servicesTypes";

export const servicesData: Service[] = [
  {
    id: "srv-01",
    name: "Apertura de puertas urgente",
    description:
      "Apertura sin daños en puertas residenciales las 24 horas.",
    category: "emergencia",
    isHighlighted: true
  },
  {
    id: "srv-02",
    name: "Cambio de cerraduras",
    description:
      "Reemplazo e instalación de cerraduras de alta seguridad.",
    category: "residencial",
    isHighlighted: false
  },
  {
    id: "srv-03",
    name: "Apertura de vehículos",
    description:
      "Desbloqueo profesional de autos sin afectar el sistema.",
    category: "automotriz",
    isHighlighted: false
  },
  {
    id: "srv-04",
    name: "Instalación de chapas comerciales",
    description:
      "Soluciones de seguridad para locales y oficinas.",
    category: "comercial",
    isHighlighted: false
  }
];
