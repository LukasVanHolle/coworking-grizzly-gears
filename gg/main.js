const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  nav.setAttribute(
    "aria-expanded",
    nav.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
