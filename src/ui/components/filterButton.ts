import type { ServiceCategory } from "../../domain/servicesTypes";

export const createFilterButton = (
  category: ServiceCategory | "todos"
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.textContent = category.toUpperCase();
  button.dataset.category = category;
  button.className = "filter-button";

  return button;
};
