// Раздел: выбор элементов интерфейса
const menuToggleButton = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuCloseButton = document.querySelector(".mobile-menu__close");
const mobileMenuOverlay = document.querySelector("[data-close-menu]");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");

let previouslyFocusedElement = null;

// Раздел: активация улучшенного меню только при наличии всех элементов
if (menuToggleButton && mobileMenu) {
  document.body.classList.add("menu-enhanced");
}

// Fonction: Ouvre le menu mobile pour permettre à l'utilisateur de voir la navigation sans quitter la page.
function openMobileMenu() {
  if (!mobileMenu) {
    return;
  }

  previouslyFocusedElement = document.activeElement;
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  menuToggleButton?.setAttribute("aria-expanded", "true");
  mobileMenuCloseButton?.focus();
}

// Fonction: Ferme le menu mobile pour que l'utilisateur revienne au contenu principal.
function closeMobileMenu() {
  if (!mobileMenu) {
    return;
  }

  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
  menuToggleButton?.setAttribute("aria-expanded", "false");

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
}

// Fonction: Surveille la touche Escape afin que l'utilisateur puisse fermer le menu rapidement.
function handleEscapeKey(event) {
  if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
    closeMobileMenu();
  }
}

// Раздел: обработчики событий
menuToggleButton?.addEventListener("click", openMobileMenu);
mobileMenuCloseButton?.addEventListener("click", closeMobileMenu);
mobileMenuOverlay?.addEventListener("click", closeMobileMenu);
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
document.addEventListener("keydown", handleEscapeKey);
