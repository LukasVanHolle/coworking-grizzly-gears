const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".menu");
const icon = document.querySelector(".icon");

hamburger.addEventListener("click", () => {
  nav.setAttribute(
    "aria-expanded",
    nav.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
  icon.setAttribute(
      "aria-hidden",
          icon.getAttribute("aria-hidden") === "true"? "false" : "true"
  )
});
