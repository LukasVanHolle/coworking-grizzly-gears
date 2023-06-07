import Circle from "./Circle.js";
const GRID_SIZE = 3;
const CIRCLE_SIZE = 10;

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
          false,
          0,
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
          90,
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
          0,
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
          90,
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
          90,
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
          180,
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
          180,
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
          270,
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
          270,
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
}

let createCircleType1 = (gridElement) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 671.000000 488.000000");
  svg.innerHTML = `<g transform="translate(0.000000,488.000000) scale(0.100000,-0.100000)"
stroke="none"
>
<path
d="M1130 4855 c0 -11 -11 -15 -40 -15 -22 0 -40 -4 -40 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -5 -25 -11 0
-11 -25 -39 -35 -39 -8 0 -35 -27 -35 -35 0 -10 -28 -35 -39 -35 -6 0 -11 -9
-11 -21 0 -12 -13 -34 -30 -49 -16 -15 -30 -33 -30 -39 0 -6 -5 -11 -11 -11
-16 0 -39 -26 -39 -45 0 -16 -22 -45 -35 -45 -13 0 -35 -29 -35 -45 0 -19 -23
-45 -39 -45 -6 0 -11 -7 -11 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -9 -10 -20 0
-11 -4 -20 -10 -20 -5 0 -10 -7 -10 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -9 -15
-20 0 -11 -4 -20 -10 -20 -5 0 -10 -9 -10 -21 0 -22 -22 -49 -39 -49 -6 0 -11
-10 -11 -23 0 -12 -9 -29 -20 -37 -11 -8 -20 -25 -20 -37 0 -14 -6 -23 -15
-23 -9 0 -15 -9 -15 -25 0 -14 -4 -25 -10 -25 -5 0 -10 -9 -10 -20 0 -11 -4
-20 -10 -20 -5 0 -10 -11 -10 -25 0 -16 -6 -25 -15 -25 -9 0 -15 -9 -15 -25 0
-14 -4 -25 -10 -25 -5 0 -10 -9 -10 -20 0 -11 -4 -20 -10 -20 -5 0 -10 -16
-10 -35 0 -24 -5 -35 -15 -35 -9 0 -15 -9 -15 -25 0 -14 -4 -25 -10 -25 -5 0
-10 -16 -10 -35 0 -19 -4 -35 -10 -35 -5 0 -10 -16 -10 -35 0 -24 -5 -35 -15
-35 -9 0 -15 -9 -15 -25 0 -14 -4 -25 -10 -25 -5 0 -10 -16 -10 -35 0 -19 -4
-35 -10 -35 -5 0 -10 -20 -10 -45 0 -33 -4 -45 -15 -45 -10 0 -15 -11 -15 -35
0 -19 -4 -35 -10 -35 -5 0 -10 -25 -10 -55 0 -30 -4 -55 -10 -55 -6 0 -10 -27
-10 -60 0 -47 -3 -60 -15 -60 -12 0 -15 -13 -15 -60 0 -33 -4 -60 -10 -60 -6
0 -10 -45 -10 -115 0 -70 -4 -115 -10 -115 -6 0 -10 -93 -10 -260 0 -167 4
-260 10 -260 6 0 10 -50 10 -130 0 -80 4 -130 10 -130 6 0 10 -20 10 -45 0
-33 4 -45 15 -45 12 0 15 -14 15 -70 0 -40 4 -70 10 -70 6 0 10 -20 10 -45 0
-25 5 -45 10 -45 6 0 10 -16 10 -35 0 -24 5 -35 15 -35 11 0 15 -12 15 -50 0
-27 5 -50 10 -50 6 0 10 -16 10 -35 0 -19 5 -35 10 -35 6 0 10 -16 10 -35 0
-24 5 -35 15 -35 10 0 15 -11 15 -35 0 -19 5 -35 10 -35 6 0 10 -9 10 -20 0
-11 5 -20 10 -20 6 0 10 -16 10 -35 0 -24 5 -35 15 -35 9 0 15 -9 15 -25 0
-14 5 -25 10 -25 6 0 10 -11 10 -25 0 -14 5 -25 10 -25 6 0 10 -9 10 -20 0
-11 7 -20 15 -20 10 0 15 -11 15 -35 0 -19 5 -35 10 -35 6 0 10 -7 10 -15 0
-8 5 -15 10 -15 6 0 10 -9 10 -20 0 -11 7 -20 15 -20 9 0 15 -9 15 -25 0 -14
5 -25 10 -25 6 0 10 -11 10 -25 0 -14 5 -25 10 -25 6 0 10 -7 10 -15 0 -9 6
-12 15 -9 11 5 15 -1 15 -20 0 -14 5 -26 10 -26 6 0 10 -9 10 -20 0 -11 5 -20
10 -20 6 0 10 -7 10 -15 0 -8 7 -15 15 -15 8 0 15 -9 15 -20 0 -11 5 -20 10
-20 6 0 10 -7 10 -15 0 -8 5 -15 10 -15 6 0 10 -9 10 -20 0 -11 7 -20 15 -20
8 0 15 -6 15 -13 0 -7 9 -19 20 -27 11 -8 20 -25 20 -37 0 -13 5 -23 10 -23
19 0 60 -48 60 -70 0 -11 5 -20 11 -20 11 0 39 -25 39 -35 0 -10 48 -55 60
-55 5 0 10 -5 10 -10 0 -14 46 -60 60 -60 5 0 10 -5 10 -10 0 -19 48 -60 70
-60 11 0 20 -7 20 -15 0 -9 9 -15 24 -15 13 0 26 -5 28 -12 6 -17 280 -16 286
0 2 7 12 12 23 12 10 0 19 7 19 15 0 9 9 15 23 15 12 0 29 9 37 20 8 11 25 20
37 20 13 0 23 5 23 11 0 16 26 39 45 39 19 0 45 23 45 39 0 6 10 11 23 11 12
0 29 9 37 20 8 11 25 20 37 20 14 0 23 6 23 15 0 9 9 15 25 15 14 0 25 5 25
10 0 6 7 10 16 10 8 0 12 4 9 10 -3 5 3 10 15 10 11 0 23 7 26 15 4 8 15 15
25 15 10 0 19 5 19 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 9 10 20 10 11 0
23 7 26 15 4 8 15 15 25 15 10 0 19 5 19 10 0 6 16 10 35 10 19 0 35 5 35 10
0 6 11 10 25 10 16 0 25 6 25 15 0 8 9 15 20 15 11 0 20 5 20 10 0 6 16 10 35
10 19 0 35 5 35 10 0 6 16 10 35 10 24 0 35 5 35 15 0 10 11 15 35 15 19 0 35
5 35 10 0 6 16 10 35 10 19 0 35 5 35 10 0 6 23 10 50 10 38 0 50 4 50 15 0
11 12 15 45 15 25 0 45 5 45 10 0 6 27 10 60 10 33 0 60 4 60 10 0 6 25 10 55
10 42 0 55 3 55 15 0 18 16 20 23 3 4 -10 6 -10 6 0 1 9 32 12 122 12 77 0
118 4 114 10 -4 7 65 10 199 10 131 0 206 -4 206 -10 0 -6 45 -10 114 -10 82
0 116 -4 119 -12 4 -10 6 -10 6 0 1 17 21 15 21 -3 0 -12 13 -15 55 -15 30 0
55 -4 55 -10 0 -6 27 -10 60 -10 33 0 60 -4 60 -10 0 -5 20 -10 44 -10 26 0
46 -5 49 -12 4 -10 6 -10 6 0 1 17 21 15 21 -3 0 -10 11 -15 35 -15 19 0 35
-4 35 -10 0 -5 16 -10 35 -10 19 0 35 -4 35 -10 0 -5 16 -10 35 -10 24 0 35
-5 35 -15 0 -10 11 -15 35 -15 19 0 35 -4 35 -10 0 -5 16 -10 35 -10 19 0 35
-4 35 -10 0 -5 9 -10 20 -10 11 0 20 -7 20 -15 0 -9 9 -15 25 -15 14 0 25 -4
25 -10 0 -5 16 -10 35 -10 19 0 35 -4 35 -10 0 -5 11 -10 25 -10 16 0 25 -6
25 -15 0 -8 9 -15 20 -15 11 0 20 -4 20 -10 0 -5 11 -10 25 -10 14 0 25 -4 25
-10 0 -5 11 -10 25 -10 16 0 25 -6 25 -15 0 -8 9 -15 20 -15 11 0 20 -4 20
-10 0 -5 9 -10 21 -10 22 0 49 -22 49 -39 0 -6 10 -11 23 -11 12 0 29 -9 37
-20 8 -11 25 -20 37 -20 13 0 23 -5 23 -11 0 -16 26 -39 45 -39 19 0 45 -23
45 -39 0 -6 10 -11 23 -11 12 0 29 -9 37 -20 8 -11 25 -20 37 -20 14 0 23 -6
23 -15 0 -8 9 -15 19 -15 11 0 21 -5 23 -12 6 -16 280 -17 286 0 2 7 19 12 38
12 24 0 34 5 34 15 0 8 5 15 11 15 7 0 19 8 28 19 9 10 25 20 36 22 11 3 21
13 24 24 2 11 12 27 22 36 11 9 19 21 19 28 0 6 5 11 10 11 14 0 60 46 60 60
0 5 5 10 11 10 16 0 39 26 39 45 0 16 22 45 35 45 13 0 35 29 35 45 0 9 16 31
35 49 19 19 35 41 35 50 0 9 5 16 10 16 6 0 10 7 10 15 0 8 7 15 15 15 8 0 15
9 15 21 0 11 5 17 10 14 6 -3 10 3 10 14 0 12 5 21 10 21 6 0 10 7 10 15 0 9
11 26 25 39 14 13 25 31 25 40 0 9 5 16 10 16 6 0 10 11 10 25 0 14 5 25 10
25 6 0 10 11 10 25 0 16 6 25 15 25 8 0 15 9 15 20 0 11 5 20 10 20 6 0 10 7
10 15 0 8 5 15 10 15 6 0 10 9 10 20 0 11 7 20 15 20 10 0 15 11 15 35 0 19 5
35 10 35 6 0 10 11 10 25 0 14 5 25 10 25 6 0 10 11 10 25 0 16 6 25 15 25 14
0 20 24 16 58 -1 6 3 12 9 12 5 0 10 9 10 20 0 11 5 20 10 20 6 0 10 16 10 35
0 24 5 35 15 35 9 0 15 9 15 25 0 14 5 25 10 25 6 0 10 16 10 35 0 19 5 35 10
35 6 0 10 20 10 45 0 33 4 45 15 45 10 0 15 11 15 35 0 19 5 35 10 35 6 0 10
27 10 60 0 33 4 60 10 60 6 0 10 27 10 60 0 47 3 60 15 60 11 0 15 13 15 54 0
35 5 56 13 59 9 3 12 115 12 517 0 402 -3 514 -12 518 -8 2 -13 21 -13 48 0
32 -4 44 -15 44 -12 0 -15 14 -15 70 0 40 -4 70 -10 70 -5 0 -10 20 -10 45 0
25 -4 45 -10 45 -5 0 -10 16 -10 35 0 24 -5 35 -15 35 -11 0 -15 12 -15 45 0
25 -4 45 -10 45 -5 0 -10 16 -10 35 0 19 -4 35 -10 35 -5 0 -10 16 -10 35 0
24 -5 35 -15 35 -10 0 -15 11 -15 35 0 19 -4 35 -10 35 -5 0 -10 11 -10 25 0
14 -4 25 -10 25 -5 0 -10 11 -10 25 0 16 -6 25 -15 25 -10 0 -15 11 -15 35 0
19 -4 35 -10 35 -5 0 -10 9 -10 20 0 11 -4 20 -10 20 -5 0 -10 11 -10 25 0 16
-6 25 -15 25 -9 0 -15 9 -15 25 0 14 -4 25 -10 25 -5 0 -10 9 -10 20 0 11 -4
20 -10 20 -5 0 -10 11 -10 25 0 16 -6 25 -15 25 -9 0 -15 9 -15 23 0 12 -9 29
-20 37 -11 8 -20 25 -20 37 0 13 -4 23 -10 23 -5 0 -10 9 -10 20 0 11 -7 20
-15 20 -8 0 -15 7 -15 15 0 8 -4 15 -10 15 -5 0 -10 9 -10 20 0 11 -4 20 -10
20 -5 0 -10 7 -10 15 0 8 -7 15 -15 15 -8 0 -15 9 -15 20 0 11 -4 20 -10 20
-5 0 -10 7 -10 15 0 8 -4 15 -10 15 -5 0 -10 9 -10 20 0 11 -7 20 -15 20 -8 0
-15 6 -15 13 0 7 -9 19 -20 27 -11 8 -20 25 -20 37 0 13 -5 23 -10 23 -14 0
-60 46 -60 60 0 5 -7 10 -15 10 -8 0 -15 9 -15 20 0 11 -4 20 -10 20 -5 0 -10
5 -10 11 0 11 -25 39 -35 39 -8 0 -35 27 -35 35 0 8 -27 35 -35 35 -10 0 -35
28 -35 39 0 6 -11 11 -25 11 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 5
-20 10 0 6 -11 10 -25 10 -14 0 -25 6 -25 13 0 10 -26 14 -110 16 -94 2 -110
0 -110 -13 0 -12 -10 -16 -35 -16 -19 0 -35 -4 -35 -10 0 -5 -11 -10 -25 -10
-14 0 -25 -4 -25 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -7 -20 -15 0 -8 -7 -15
-15 -15 -8 0 -15 -4 -15 -10 0 -5 -7 -10 -16 -10 -9 0 -31 -16 -50 -35 -18
-19 -40 -35 -49 -35 -19 0 -45 -23 -45 -39 0 -6 -11 -11 -25 -11 -14 0 -25 -4
-25 -10 0 -5 -7 -10 -16 -10 -18 0 -44 -23 -44 -39 0 -6 -11 -11 -25 -11 -14
0 -25 -4 -25 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9 -10 -20
-10 -11 0 -20 -7 -20 -15 0 -9 -9 -15 -25 -15 -14 0 -25 -4 -25 -10 0 -5 -11
-10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -7 -20 -15 0
-10 -11 -15 -35 -15 -19 0 -35 -4 -35 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4
-25 -10 0 -5 -11 -10 -25 -10 -16 0 -25 -6 -25 -15 0 -10 -11 -15 -35 -15 -19
0 -35 -4 -35 -10 0 -5 -16 -10 -35 -10 -19 0 -35 -4 -35 -10 0 -5 -16 -10 -35
-10 -24 0 -35 -5 -35 -15 0 -11 -12 -15 -45 -15 -25 0 -45 -4 -45 -10 0 -5
-16 -10 -35 -10 -19 0 -35 -4 -35 -10 0 -6 -27 -10 -60 -10 -47 0 -60 -3 -60
-15 0 -12 -14 -15 -70 -15 -40 0 -70 -4 -70 -10 0 -6 -30 -10 -70 -10 -40 0
-70 -4 -70 -10 0 -6 -128 -10 -365 -10 -237 0 -365 4 -365 10 0 6 -30 10 -70
10 -40 0 -70 4 -70 10 0 6 -30 10 -70 10 -56 0 -70 3 -70 15 0 12 -13 15 -60
15 -33 0 -60 4 -60 10 0 6 -16 10 -35 10 -19 0 -35 5 -35 10 0 6 -20 10 -45
10 -33 0 -45 4 -45 15 0 10 -11 15 -35 15 -19 0 -35 5 -35 10 0 6 -11 10 -25
10 -14 0 -25 5 -25 10 0 6 -16 10 -35 10 -24 0 -35 5 -35 15 0 10 -11 15 -35
15 -19 0 -35 5 -35 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -13 10 -30
10 -20 0 -30 5 -30 15 0 9 -9 15 -25 15 -14 0 -25 5 -25 10 0 6 -11 10 -25 10
-14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 7 -20 15 0 9 -9 15 -25 15 -14
0 -25 5 -25 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0
-20 7 -20 15 0 8 -7 15 -15 15 -8 0 -15 5 -15 10 0 6 -9 10 -20 10 -11 0 -20
5 -20 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 11 0 16 -26 39 -45 39 -9 0 -31
16 -49 35 -19 19 -41 35 -50 35 -9 0 -16 5 -16 10 0 6 -7 10 -15 10 -8 0 -15
7 -15 15 0 8 -9 15 -20 15 -11 0 -20 5 -20 10 0 6 -11 10 -25 10 -14 0 -25 5
-25 10 0 6 -16 10 -35 10 -24 0 -35 5 -35 15 0 12 -17 15 -95 15 -78 0 -95 -3
-95 -15z"
/>
</g>`;
  svg.classList.add("circle");
  gridElement.append(svg);
  return svg;
};
let createCircleType2 = (gridElement) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 671.000000 488.000000");
  svg.innerHTML = `<g
  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
  stroke="none"
>
  <path
    d="M2827 4993 c-5 -4 -72 -11 -150 -15 -175 -9 -249 -17 -261 -29 -6 -5
-34 -9 -63 -9 -29 0 -53 -4 -53 -9 0 -5 -19 -11 -42 -15 -82 -10 -118 -18
-124 -27 -3 -5 -21 -9 -40 -9 -19 0 -34 -4 -34 -10 0 -5 -11 -10 -25 -10 -14
0 -35 -5 -48 -12 -49 -25 -58 -28 -82 -28 -14 0 -25 -4 -25 -10 0 -5 -7 -10
-15 -10 -8 0 -24 -4 -35 -10 -11 -5 -29 -14 -40 -20 -11 -5 -27 -10 -35 -10
-8 0 -15 -4 -15 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5
-7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10
0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4
-20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -7 -10 -15 -10 -8 0
-15 -4 -15 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -6 -10 -13 -10
-7 0 -23 -9 -35 -20 -12 -11 -26 -20 -32 -20 -5 0 -10 -4 -10 -10 0 -5 -6 -10
-13 -10 -7 0 -19 -9 -27 -20 -8 -11 -21 -20 -28 -20 -8 0 -27 -13 -42 -30 -15
-16 -33 -30 -40 -30 -6 0 -29 -18 -50 -40 -21 -22 -43 -40 -48 -40 -13 0 -322
-307 -322 -320 0 -5 -22 -33 -50 -61 -27 -28 -50 -55 -50 -60 0 -5 -14 -23
-30 -41 -17 -17 -30 -35 -30 -40 0 -5 -9 -18 -20 -30 -11 -12 -20 -28 -20 -35
0 -7 -4 -13 -10 -13 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10
-15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -8 -15 -5 0 -14 -16
-22 -35 -8 -19 -17 -35 -22 -35 -4 0 -8 -9 -8 -20 0 -11 -4 -20 -10 -20 -5 0
-10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15
-5 0 -10 -9 -10 -20 0 -11 -4 -20 -10 -20 -5 0 -10 -11 -10 -25 0 -14 -4 -25
-10 -25 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -13 -10 -30 0 -16
-4 -30 -10 -30 -5 0 -10 -9 -10 -20 0 -11 -4 -20 -10 -20 -5 0 -10 -9 -10 -20
0 -11 -4 -20 -10 -20 -5 0 -10 -11 -10 -24 0 -14 -4 -28 -10 -31 -5 -3 -10
-17 -10 -30 0 -13 -4 -27 -10 -30 -5 -3 -10 -17 -10 -31 0 -13 -4 -24 -10 -24
-5 0 -10 -13 -10 -29 0 -17 -4 -33 -10 -36 -5 -3 -10 -19 -10 -35 0 -16 -4
-32 -10 -35 -5 -3 -10 -19 -10 -35 0 -16 -4 -32 -10 -35 -5 -3 -10 -26 -10
-51 0 -24 -4 -44 -9 -44 -9 0 -15 -41 -27 -165 -3 -33 -10 -66 -16 -72 -14
-17 -13 -675 1 -701 5 -10 11 -49 12 -85 1 -37 6 -67 11 -67 4 0 8 -20 8 -45
0 -25 5 -45 10 -45 6 0 10 -20 10 -45 0 -25 5 -45 10 -45 6 0 10 -15 10 -34 0
-19 5 -38 10 -41 6 -3 10 -19 10 -36 0 -16 5 -29 10 -29 6 0 10 -14 10 -30 0
-17 5 -40 12 -53 24 -48 28 -57 28 -77 0 -11 5 -20 10 -20 6 0 10 -13 10 -30
0 -16 5 -30 10 -30 6 0 10 -9 10 -20 0 -11 5 -20 10 -20 6 0 10 -11 10 -24 0
-14 5 -28 10 -31 6 -3 10 -15 10 -26 0 -10 3 -19 8 -19 8 0 32 -48 32 -66 0
-7 3 -14 8 -16 10 -4 52 -87 52 -104 0 -8 5 -14 10 -14 6 0 10 -7 10 -15 0 -8
5 -15 10 -15 6 0 10 -7 10 -15 0 -8 5 -15 10 -15 6 0 10 -7 10 -15 0 -9 9 -25
20 -37 10 -11 26 -35 34 -52 8 -17 27 -43 41 -58 14 -15 25 -32 25 -39 0 -6
14 -24 30 -39 17 -15 30 -34 30 -42 0 -7 14 -24 30 -37 17 -13 30 -29 30 -35
0 -19 202 -216 221 -216 10 0 19 -4 21 -10 4 -13 109 -40 153 -40 18 0 46 5
62 12 15 6 33 12 38 12 19 2 95 40 95 48 0 4 6 8 13 8 6 1 28 14 47 30 19 17
38 30 42 30 4 0 17 9 28 20 11 11 27 20 35 20 8 0 15 5 15 10 0 6 7 10 15 10
8 0 24 9 35 20 11 11 27 20 35 20 8 0 15 5 15 10 0 6 9 10 19 10 11 0 21 4 23
8 4 11 166 92 184 92 8 0 14 5 14 10 0 6 9 10 20 10 11 0 34 9 52 20 18 11 41
20 51 20 9 0 27 5 40 12 48 24 57 28 77 28 11 0 20 5 20 10 0 6 15 10 34 10
19 0 38 4 41 10 3 5 17 10 30 10 13 0 27 4 30 10 3 5 21 10 40 10 19 0 37 5
40 10 3 6 28 10 56 10 27 0 49 5 49 10 0 6 19 10 43 10 24 0 47 4 53 9 16 16
161 23 434 23 286 -1 430 -8 430 -23 0 -5 20 -9 44 -9 25 0 48 -4 51 -10 3 -5
28 -10 56 -10 27 0 49 -4 49 -10 0 -5 15 -10 34 -10 19 0 38 -4 41 -10 3 -5
19 -10 35 -10 16 0 32 -4 35 -10 3 -5 17 -10 31 -10 13 0 33 -5 44 -10 11 -6
29 -15 40 -20 11 -6 29 -10 40 -10 11 0 20 -4 20 -10 0 -5 10 -10 23 -10 26 0
77 -21 77 -32 0 -5 9 -8 20 -8 11 0 28 -4 38 -9 9 -5 40 -20 67 -32 28 -13 52
-27 53 -31 2 -5 12 -8 22 -8 10 0 22 -4 25 -10 3 -5 35 -24 70 -42 36 -17 65
-35 65 -40 0 -4 5 -8 10 -8 6 0 41 -20 78 -45 37 -25 72 -45 79 -45 7 0 13 -7
13 -15 0 -8 6 -15 14 -15 8 0 27 -12 44 -27 60 -56 88 -66 186 -66 64 0 100 4
121 15 46 25 116 99 122 130 3 16 10 31 14 34 25 15 3 169 -28 202 -7 7 -13
17 -13 22 0 5 -11 20 -25 34 -14 14 -25 29 -25 33 0 4 -11 21 -25 37 -14 16
-25 33 -25 37 0 4 -6 14 -13 21 -7 7 -27 36 -44 63 -18 28 -36 55 -40 60 -5 6
-21 35 -37 65 -16 30 -35 62 -42 71 -8 8 -14 23 -14 32 0 9 -4 17 -10 17 -5 0
-10 7 -10 15 0 8 -23 62 -50 118 -28 57 -50 110 -50 119 0 9 -4 20 -10 23 -5
3 -10 17 -10 30 0 13 -4 27 -10 30 -5 3 -10 17 -10 30 0 13 -4 26 -9 29 -5 3
-11 20 -14 38 -3 18 -10 49 -16 68 -28 97 -33 118 -38 155 -2 22 -8 49 -13 60
-5 11 -11 43 -14 70 -3 28 -11 91 -17 140 -24 182 -13 562 21 740 6 33 14 80
16 105 3 25 9 54 13 65 17 43 31 92 31 113 0 11 5 24 10 27 6 3 10 22 10 41 0
19 5 34 10 34 6 0 10 14 10 30 0 17 5 30 10 30 6 0 10 14 10 30 0 17 4 30 9
30 5 0 15 23 22 50 7 28 16 50 21 50 4 0 8 9 8 20 0 11 4 20 9 20 5 0 11 13
14 29 3 16 13 36 22 44 8 9 15 27 15 41 0 14 4 26 9 26 5 0 14 14 21 30 7 17
16 30 21 30 5 0 9 9 9 20 0 11 5 20 10 20 6 0 10 9 10 20 0 11 5 20 10 20 6 0
10 9 10 20 0 11 4 20 8 20 5 0 15 12 23 28 8 15 22 36 32 46 9 11 17 26 17 33
0 7 4 13 8 13 5 0 15 12 23 27 8 16 25 40 38 55 30 34 51 75 51 98 0 10 5 20
11 22 8 3 12 38 12 103 0 65 -4 100 -12 103 -6 2 -11 17 -11 33 0 16 -4 29
-10 29 -5 0 -10 7 -10 15 0 16 -147 165 -162 165 -5 0 -27 18 -48 40 -21 22
-44 40 -50 40 -7 0 -25 14 -40 30 -15 17 -31 30 -34 30 -4 0 -16 8 -27 18 -10
11 -32 25 -47 33 -15 8 -29 17 -32 20 -12 14 -100 69 -109 69 -6 0 -11 5 -11
10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0
6 -8 10 -17 10 -10 0 -29 9 -43 20 -14 11 -31 20 -37 20 -7 0 -13 5 -13 10 0
6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6
-7 10 -15 10 -15 0 -25 4 -72 28 -13 7 -30 12 -38 12 -8 0 -15 5 -15 10 0 6
-11 10 -25 10 -14 0 -25 5 -25 10 0 6 -11 10 -25 10 -14 0 -34 5 -45 10 -11 6
-29 15 -40 20 -11 6 -29 10 -39 10 -11 0 -23 5 -26 10 -3 6 -21 10 -39 10 -18
0 -36 3 -40 7 -10 10 -96 32 -127 33 -14 0 -29 4 -35 9 -5 5 -34 12 -64 14
-30 3 -80 11 -110 17 -30 6 -118 16 -195 21 -77 5 -167 12 -200 15 -33 3 -64
2 -68 -3z"
  />
</g>`;
  svg.classList.toggle("circle");
  gridElement.append(svg);
  return svg;
};
