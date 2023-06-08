import Grid from "./Grid.js";

const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);
const button = document.querySelector(".win button");
button.addEventListener("click", () => {
  document.querySelector(".win").classList.remove("active");
});

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
    if (circles[5].deg === 270) {
      document.querySelector(".win").classList.toggle("active");
    }
    if (circles[3].deg == 180) {
      circles[3].cellElement.classList.toggle("verander-after");
      updateCircle(circles[3].cellElement, circles[4].cellElement);
    }
    if (circles[4].deg == 180) {
      circles[3].cellElement.classList.toggle("verander-after");
      updateCircle(circles[4].cellElement, circles[5].cellElement);
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

function updateCircle(circle1, circle2) {
  circle1.classList.add("hidden-after");
  circle2.classList.remove("hidden-after");
}
