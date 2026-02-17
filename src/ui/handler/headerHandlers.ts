/**
 * Manejador de eventos exclusivos del Header
 * - Toggling del menú en mobile
 * - Efectos de scroll (sticky shadow)
 * - Cierre automático al navegar
 * - Cierre al hacer clic fuera del menú
 */
export const registerHeaderHandlers = (): void => {
  const header = document.querySelector<HTMLElement>(".site-header");
  const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const mainNav = document.querySelector<HTMLElement>(".main-nav");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (!header || !menuToggle || !mainNav) return;

  // Helper: Cerrar menú
  const closeMenu = (): void => {
    menuToggle.classList.remove("is-open");
    mainNav.classList.remove("is-mobile-open");
    document.body.classList.remove("no-scroll");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  };

  // Helper: Abrir menú
  const openMenu = (): void => {
    menuToggle.classList.add("is-open");
    mainNav.classList.add("is-mobile-open");
    document.body.classList.add("no-scroll");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
  };

  // 1. Toggle Menú Mobile
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Evitar que se propague al document
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // 2. Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // 3. Cerrar menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    const isMenuOpen = mainNav.classList.contains("is-mobile-open");
    const target = e.target as HTMLElement;
    
    // Si el menú está abierto y el clic no fue en el nav ni en el toggle
    if (isMenuOpen && !mainNav.contains(target) && !menuToggle.contains(target)) {
      closeMenu();
    }
  });

  // 4. Cerrar menú al presionar Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("is-mobile-open")) {
      closeMenu();
      menuToggle.focus(); // Devolver el foco al botón
    }
  });

  // 5. Cerrar menú al cambiar de tamaño de ventana (si se pasa a desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && mainNav.classList.contains("is-mobile-open")) {
      closeMenu();
    }
  });

  // 6. Efecto Sticky al Scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        if (scrollY > 10) {
          header.classList.add("is-scrolled");
        } else {
          header.classList.remove("is-scrolled");
        }
        
        ticking = false;
      });
      
      ticking = true;
    }
  }, { passive: true });
};
