import Circle from "./Circle.js";
const GRID_SIZE = 3;
const CIRCLE_SIZE = 15;

export default class Grid {
  #circles;
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--circle-size", `${CIRCLE_SIZE}rem`);
    this.#circles = createCircleElements(gridElement).map((circle, index) => {
      if (index === 0) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          true,
          false
        );
      } else if (index === 1) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          true,
          false
        );
      } else if (index === 2) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          false,
          true,
          true
        );
      } else if (index === 3) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          false,
          true
        );
      } else if (index === 4) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          false,
          true
        );
      } else if (index === 5) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true
        );
      } else if (index === 6) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          true,
          false,
          false
        );
      } else if (index === 7) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true
        );
      } else if (index === 8) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true
        );
      }
    });
  }
  get circlesByColumn() {
    return this.#circles.reduce((circleGrid, circle) => {
      circleGrid[circle.x] = circleGrid[circle.x] || [];
      circleGrid[circle.x][circle.y] = circle;
      return circleGrid;
    }, []);
  }
  get circlesByRow() {
    return this.#circles.reduce((circleGrid, circle) => {
      circleGrid[circle.y] = circleGrid[circle.y] || [];
      circleGrid[circle.y][circle.x] = circle;
      return circleGrid;
    }, []);
  }
  get circles() {
    return this.#circles;
  }
}
function createCircleElements(gridElement) {
  const circles = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circles.push(circle);
    gridElement.append(circle);
  }
  return circles;
}
