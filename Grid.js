import Circle from "./Circle.js";
const GRID_SIZE = 3;
const CIRCLE_SIZE = 11;

export default class Grid {
  #circles;
  #svgs;
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--circle-size", `${CIRCLE_SIZE}rem`);
    this.#svgs = createCircleElements(gridElement);
    this.#circles = this.#svgs.map((circle, index) => {
      if (index === 0) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          true,
          false,
          45,
          1
        );
      } else if (index === 1) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          true,
          false,
          315,
          2
        );
      } else if (index === 2) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          false,
          true,
          true,
          135,
          1
        );
      } else if (index === 3) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          false,
          true,
          90 + 45,
          2
        );
      } else if (index === 4) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          false,
          true,
          false,
          true,
          90 + 45,
          2
        );
      } else if (index === 5) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true,
          180 + 45,
          1
        );
      } else if (index === 6) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          true,
          false,
          false,
          270 + 45,
          1
        );
      } else if (index === 7) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true,
          180 + 45,
          1
        );
      } else if (index === 8) {
        return new Circle(
          circle,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE),
          true,
          false,
          false,
          true,
          180 + 45,
          1
        );
      }
    });
  }
  // get circlesByColumn() {
  //   return this.#circles.reduce((circleGrid, circle) => {
  //     circleGrid[circle.x] = circleGrid[circle.x] || [];
  //     circleGrid[circle.x][circle.y] = circle;
  //     return circleGrid;
  //   }, []);
  // }
  // get circlesByRow() {
  //   return this.#circles.reduce((circleGrid, circle) => {
  //     circleGrid[circle.y] = circleGrid[circle.y] || [];
  //     circleGrid[circle.y][circle.x] = circle;
  //     return circleGrid;
  //   }, []);
  // }
  get circles() {
    return this.#circles;
  }
  get svgs() {
    return this.#svgs;
  }
}
function createCircleElements(gridElement) {
  let circles = [];
  circles.push(createCircleType2(gridElement));
  circles.push(createCircleType1(gridElement));
  circles.push(createCircleType2(gridElement));
  circles.push(createCircleType1(gridElement));
  circles.push(createCircleType1(gridElement));
  circles.push(createCircleType2(gridElement));
  circles.push(createCircleType2(gridElement));
  circles.push(createCircleType2(gridElement));
  circles.push(createCircleType2(gridElement));
  return circles;
}

let createCircleType1 = (gridElement) => {
  const div = document.createElement("div");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.innerHTML = ` <circle cx="100" cy="100" r="80" fill="green" />
  <path d="M100,20 A80,80 0 0,0 180,100" fill="#222" />
  <path d="M100,20 A80,80 0 0,1 180,100" fill="#222" />
  <path d="M100,180 A80,80 0 0,1 20,100" fill="#222" />
  <path d="M100,180 A80,80 0 0,0 20,100" fill="#222" />`;
  div.classList.toggle("circle");
  div.appendChild(svg);
  gridElement.append(div);
  return div;
};
let createCircleType2 = (gridElement) => {
  const div = document.createElement("div");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.innerHTML = `<circle cx="100" cy="100" r="80" fill="green" />
  <path d="M100,20 A80,80 0 0,0 180,100" fill="#222" />
  <path d="M100,20 A80,80 0 0,1 180,100" fill="#222" />
  <path d="M100,180 A80,80 0 0,1 180,100" fill="#222" />
  <path d="M100,180 A80,80 0 0,0 180,100" fill="#222" />`;
  div.classList.toggle("circle");
  div.appendChild(svg);
  gridElement.append(div);
  return div;
};
