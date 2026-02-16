import type { Testimonial } from "./testimonialTypes";

/**
 * Calcula promedio de rating.
 */
export const calculateAverageRating = (
  testimonials: Testimonial[]
): number => {
  if (testimonials.length === 0) return 0;

  const total = testimonials.reduce(
    (acc, testimonial) => acc + testimonial.rating,
    0
  );

  return Number((total / testimonials.length).toFixed(1));
};

/**
 * Obtiene testimonios con rating mínimo.
 */
export const filterTestimonialsByMinimumRating = (
  testimonials: Testimonial[],
  minimumRating: 1 | 2 | 3 | 4 | 5
): Testimonial[] => {
  return testimonials.filter(
    testimonial => testimonial.rating >= minimumRating
  );
};
