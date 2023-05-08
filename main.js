import Grid from "./Grid.js";

(function () {
  const gameBoard = document.querySelector(".game-board");
  const grid = new Grid(gameBoard);
  console.log(grid.circlesByColumn);
  console.log(grid.circlesByRow);
})();
