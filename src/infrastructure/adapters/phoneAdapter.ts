/**
 * Genera URL telefónica estándar.
 */
export const buildPhoneURL = (
  phone: string
): string => {
  return `tel:${phone}`;
};
