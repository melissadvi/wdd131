const yearSpan = document.querySelector('#current-year');
const lastModified = document.querySelector('#lastModified');
yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
    menuButton.setAttribute("aria-expanded", isOpen);
});