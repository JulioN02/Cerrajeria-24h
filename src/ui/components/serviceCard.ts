import type { Service } from "../../domain/servicesTypes";

export const createServiceCard = (service: Service): HTMLElement => {
  const article = document.createElement("article");
  article.className = "service-card";

  article.innerHTML = `
    <h3>${service.name}</h3>
    <p>${service.description}</p>
  `;

  if (service.isHighlighted) {
    article.classList.add("service-card--highlighted");
  }

  return article;
};
