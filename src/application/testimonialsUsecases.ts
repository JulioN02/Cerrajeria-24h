import type { Testimonial } from "../domain/testimonialTypes";
import {
  calculateAverageRating,
  filterTestimonialsByMinimumRating
} from "../domain/testimonialRules";

/**
 * Retorna todos los testimonios.
 */
export const getAllTestimonials = (
  testimonials: Testimonial[]
): Testimonial[] => {
  return testimonials;
};

/**
 * Retorna solo testimonios con rating alto.
 */
export const getTopTestimonials = (
  testimonials: Testimonial[]
): Testimonial[] => {
  return filterTestimonialsByMinimumRating(testimonials, 4);
};

/**
 * Obtiene promedio general de satisfacción.
 */
export const getAverageRating = (
  testimonials: Testimonial[]
): number => {
  return calculateAverageRating(testimonials);
};
