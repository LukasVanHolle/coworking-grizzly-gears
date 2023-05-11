import Grid from "./Grid.js";

const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);

let circles = grid.circles;
console.log(circles);

circles.forEach((circle, index) => {
  circle.cellElement.addEventListener("click", () => {
    if (circle.kanDraaien(circles, index)) {
      console.log(index);
    }
  });
});

console.log(grid.circlesByColumn);
console.log(grid.circlesByRow);
