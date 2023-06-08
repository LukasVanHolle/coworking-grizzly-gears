import Grid from "./Grid.js";

const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);

let circles = grid.circles;
let svgs = grid.svgs;
// console.log(circles);

let setWaarden = function (index) {
  let boven, rechts, onder, links;
  boven = circles[index].zijdeBoven;
  rechts = circles[index].zijdeRechts;
  onder = circles[index].zijdeOnder;
  links = circles[index].zijdeLinks;

  circles[index].zijdeBoven = links;
  circles[index].zijdeRechts = boven;
  circles[index].zijdeOnder = rechts;
  circles[index].zijdeLinks = onder;
};

svgs.forEach((svg, index) => {
  svg.style.transform = `rotate(${circles[index].deg}deg)`;
});

circles[3].cellElement.classList.remove("hidden-after");

circles.forEach((circle, index) => {
  circle.cellElement.addEventListener("click", () => {
    if (circles[3].deg == 180) {
      circles[3].cellElement.classList.toggle("verander-after");
      updateConnector();
    }
    if (circle.kanDraaien(circles, index)) {
      console.log(index + "mag draaien");
      let draaiCirkel = circles[index].cellElement;
      draaiCirkel.style.transform = `rotate(${circles[index].deg + 90}deg)`;
      circles[index].deg += 90;
      draaiCirkel.style.transition = `0.5s ease`;
      setWaarden(index);

      // console.log(circles[index]);
    }
  });
});

function updateConnector() {
  const circle1 = document.querySelector(".verander-after");
  const circle2 = document.querySelector(".verander-after + div");
  console.log(circle1, circle2);
  const cx1 = circle1.offsetLeft + circle1.offsetWidth / 2;
  const cy1 = circle1.offsetTop + circle1.offsetHeight / 2;
  const cx2 = circle2.offsetLeft + circle2.offsetWidth / 2;
  const cy2 = circle2.offsetTop + circle2.offsetHeight / 2;

  const dx = cx2 - cx1;
  const dy = cy2 - cy1;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  circle1.classList.add("hidden-after");
  circle2.classList.remove("hidden-after");
}

// Roep de functie aan om het tussenstukje bij te werken
