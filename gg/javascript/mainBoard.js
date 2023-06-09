import Grid from "./Grid.js";

const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);
const button = document.querySelector("#btn");
const winCon = document.querySelector("#win-container")
const name = document.querySelector("#name");
let finalTime = 0;
button.addEventListener("click", async () => {
  await putTime(name.value, finalTime);
  winCon.classList.remove("active");
  document.location.reload();
  location.href = "../leaderboard/"
});

let startTime = Date.now();

const timer = document.querySelector("#timer");

const updateTimer = (circles) => {
  const currTime = Date.now();
  let verlopen = currTime - startTime;
  let sec = Math.floor(verlopen / 1000);

  timer.textContent = sec + " sec";

  if (circles[5].deg >= 270) {
    clearInterval(interval);
    finalTime = sec;
    console.log(finalTime);
  }
}


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
      winCon.classList.toggle("active");
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

var interval = setInterval(() => updateTimer(circles), 1000);


const putTime = async (name, time) => {
  const date = {
    name: name,
    time: time,
  };

  try{
    const response = await fetch("http://localhost:3000/api/v1/leaderbord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(date),
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Error sending PUT request:", response.status);
      throw new Error("Error sending PUT request");
    }
  } catch (error) {
    console.error("Error sending PUT request:", error);
    throw error;
  }
}