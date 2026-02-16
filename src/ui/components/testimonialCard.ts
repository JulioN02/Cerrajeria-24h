import type { Testimonial } from "../../domain/testimonialTypes";

export const createTestimonialCard = (
  testimonial: Testimonial
): HTMLElement => {
  const article = document.createElement("article");
  article.className = "testimonial-card";

  article.innerHTML = `
    <p>"${testimonial.message}"</p>
    <strong>${testimonial.clientName}</strong>
    <span>⭐ ${testimonial.rating}/5</span>
  `;

  return article;
};
