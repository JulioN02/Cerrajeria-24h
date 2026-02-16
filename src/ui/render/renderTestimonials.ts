import type { Testimonial } from "../../domain/testimonialTypes";
import { dom } from "../dom";
import { createTestimonialCard } from "../components/testimonialCard";

export const renderTestimonials = (
  testimonials: Testimonial[]
): void => {
  if (!dom.testimonialsContainer) return;

  dom.testimonialsContainer.innerHTML = "";

  testimonials.forEach(testimonial => {
    const card = createTestimonialCard(testimonial);
    dom.testimonialsContainer?.appendChild(card);
  });
};
