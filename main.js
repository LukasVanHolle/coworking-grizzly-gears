import Grid from "./Grid.js";

const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);

let circles = grid.circles;
console.log(circles);

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

circles.forEach((circle, index) => {
  circle.cellElement.addEventListener("click", () => {
    if (circle.kanDraaien(circles, index)) {
      console.log(index + "mag draaien");
      let draaiCirkel = circles[index].cellElement;
      draaiCirkel.style.transform = `rotate(${circles[index].deg + 90}deg)`;
      circles[index].deg += 90;
      draaiCirkel.style.transition = `0.5s ease`;
      setWaarden(index);

      console.log(circles[index]);
    }
  });
});
