/**
 * Sanitiza mensaje básico para URL.
 * Elimina saltos de línea y recorta espacios.
 */
export const sanitizeMessage = (message: string): string => {
  return message
    .replace(/\n/g, " ")
    .replace(/\r/g, " ")
    .trim();
};

/**
 * Valida que el mensaje no esté vacío
 * y tenga longitud mínima razonable.
 */
export const isValidContactMessage = (
  message: string
): boolean => {
  const sanitized = sanitizeMessage(message);

  if (sanitized.length < 5) return false;
  if (sanitized.length > 500) return false;

  return true;
};

/**
 * Valida número telefónico simple (solo dígitos).
 */
export const isValidPhoneNumber = (
  phone: string
): boolean => {
  const onlyNumbers = /^[0-9]+$/;
  return onlyNumbers.test(phone);
};
