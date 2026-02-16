import type { Service } from "../../domain/servicesTypes";
import { dom } from "../dom";
import { createServiceCard } from "../components/serviceCard";

export const renderServices = (services: Service[]): void => {
  if (!dom.servicesContainer) return;

  dom.servicesContainer.innerHTML = "";

  services.forEach(service => {
    const card = createServiceCard(service);
    dom.servicesContainer?.appendChild(card);
  });
};
