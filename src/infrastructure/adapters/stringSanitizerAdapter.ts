/**
 * Sanitiza caracteres potencialmente problemáticos.
 */
export const normalizeText = (value: string): string => {
  return value
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "")
    .trim();
};
