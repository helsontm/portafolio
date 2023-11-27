// Al hacer click, necesitamos hacer que el menú se despliegue.
// Como tenemos un left: 100%, necesitamos aplicar un left: 0.

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu_visible")
})