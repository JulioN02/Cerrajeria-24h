import type { Service, ServiceCategory } from "../../domain/servicesTypes";
import { getServicesByCategory } from "../../application/servicesUsecases";
import { renderServices } from "../render/renderServices";
import { dom } from "../dom";

export const registerServicesFilterHandler = (
  services: Service[]
): void => {
  if (!dom.servicesFilterContainer) return;

  dom.servicesFilterContainer.addEventListener("click", event => {
    const target = event.target as HTMLElement;

    if (!target.dataset.category) return;

    const category = target.dataset.category as
      | ServiceCategory
      | "todos";

    // UX: Actualizar estado visual
    const buttons = dom.servicesFilterContainer?.querySelectorAll(".filter-button");
    buttons?.forEach(btn => btn.classList.remove("is-active"));
    target.classList.add("is-active");

    if (category === "todos") {
      renderServices(services);
      return;
    }

    const filtered = getServicesByCategory(services, category);
    renderServices(filtered);
  });
};
