export const registerGlobalHandlers = (): void => {
  // Ejemplo: agregar clase al body cuando hay scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      document.body.classList.add("is-scrolled");
    } else {
      document.body.classList.remove("is-scrolled");
    }
  });
};
