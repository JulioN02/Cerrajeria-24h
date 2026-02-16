// Rating limitado por regla de negocio (1 a 5)
export type Rating = 1 | 2 | 3 | 4 | 5;

export type Testimonial = {
  id: string;
  clientName: string;
  message: string;
  rating: Rating;
};
