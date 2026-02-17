import type { Service } from "../../domain/servicesTypes";

export const createServiceCard = (service: Service): HTMLElement => {
  const article = document.createElement("article");
  article.className = `service-card ${service.isHighlighted ? "service-card--emergency" : `service-card--${service.category}`}`;

  const imageHtml = service.image 
    ? `<div class="service-card__image-wrapper">
         <img src="${service.image}" alt="${service.name}" class="service-card__image" loading="lazy">
       </div>`
    : "";

  article.innerHTML = `
    ${imageHtml}
    <div class="service-card__content">
      <div class="flex flex--between items-center wrap-nowrap gap-sm">
        <h3 class="service-card__title">${service.name}</h3>
        <span class="badge badge--sm badge--${service.category} flex-none">
          ${service.category.charAt(0).toUpperCase() + service.category.slice(1)}
        </span>
      </div>
      <p class="service-card__description">${service.description}</p>
    </div>
  `;

  return article;
};
