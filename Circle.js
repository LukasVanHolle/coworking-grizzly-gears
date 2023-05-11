export default class Circle {
  #cellElement;
  #x;
  #y;
  #zijdeBoven;
  #zijdeRechts;
  #zijdeOnder;
  #zijdeLinks;
  #deg;
  constructor(
    cellElement,
    x,
    y,
    zijdeBoven,
    zijdeRechts,
    zijdeOnder,
    zijdeLinks
  ) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
    this.#zijdeBoven = zijdeBoven;
    this.#zijdeRechts = zijdeRechts;
    this.#zijdeOnder = zijdeOnder;
    this.#zijdeLinks = zijdeLinks;
    const bol = document.createElement("div");
    bol.classList.add("bol");
    this.#deg = 0;

    // voeg het dataveld voor elke zijde toe aan de bol
    bol.dataset.zijde1 = zijdeBoven;
    bol.dataset.zijde2 = zijdeRechts;
    bol.dataset.zijde3 = zijdeOnder;
    bol.dataset.zijde4 = zijdeLinks;
    // controleer elke zijde en voeg een inkeping toe aan de css als de waarde true is
    if (zijdeBoven) {
      const top = document.createElement("div");
      top.classList.add("bol");
      top.classList.add("has-notch-top");
      cellElement.appendChild(top);
    }
    if (zijdeRechts) {
      const right = document.createElement("div");
      right.classList.add("bol");
      right.classList.add("has-notch-right");
      cellElement.appendChild(right);
    }
    if (zijdeOnder) {
      const bottom = document.createElement("div");
      bottom.classList.add("bol");
      bottom.classList.add("has-notch-bottom");
      cellElement.appendChild(bottom);
    }
    if (zijdeLinks) {
      const left = document.createElement("div");
      left.classList.add("bol");
      left.classList.add("has-notch-left");
      cellElement.appendChild(left);
    }
  }
  get x() {
    return this.#x;
  }
  get y() {
    return this.#y;
  }
  get cellElement() {
    return this.#cellElement;
  }
  get zijdeBoven() {
    return this.#zijdeBoven;
  }
  get zijdeRechts() {
    return this.#zijdeRechts;
  }
  get zijdeOnder() {
    return this.#zijdeOnder;
  }
  get zijdeLinks() {
    return this.#zijdeLinks;
  }

  get deg() {
    return this.#deg;
  }
  set deg(value) {
    this.#deg = +value;
  }
  set zijdeBoven(value) {
    this.#zijdeBoven = value;
  }
  set zijdeRechts(value) {
    this.#zijdeRechts = value;
  }
  set zijdeOnder(value) {
    this.#zijdeOnder = value;
  }
  set zijdeLinks(value) {
    this.#zijdeLinks = value;
  }

  kanDraaien(circles, index) {
    let buren = [];
    if (circles[index - 3]) {
      buren.push(circles[index - 3]);
    } else {
      buren.push(false);
    }
    if (circles[index + 1] && circles[index + 1].x != 0) {
      buren.push(circles[index + 1]);
    } else {
      buren.push(false);
    }
    if (circles[index + 3]) {
      buren.push(circles[index + 3]);
    } else {
      buren.push(false);
    }

    if (circles[index - 1] && circles[index - 1].x != 2) {
      buren.push(circles[index - 1]);
    } else {
      buren.push(false);
    }

    console.log(buren);
    let magDraaienLinks = true;
    let magDraaienRechts = true;
    let magDraaienBoven = true;
    let magDraaienOnder = true;

    if (buren[0]) {
      if (buren[0].zijdeOnder) {
        magDraaienBoven = true;
      } else {
        magDraaienBoven = false;
      }
    }
    if (buren[1]) {
      if (buren[1].zijdeLinks) {
        magDraaienRechts = true;
      } else {
        magDraaienRechts = false;
      }
    }
    if (buren[2]) {
      if (buren[2].zijdeBoven) {
        magDraaienOnder = true;
      } else {
        magDraaienOnder = false;
      }
    }
    if (buren[3]) {
      if (buren[3].zijdeRechts) {
        magDraaienLinks = true;
      } else {
        magDraaienLinks = false;
      }
    }

    console.log(
      magDraaienBoven +
        " " +
        magDraaienRechts +
        " " +
        magDraaienOnder +
        " " +
        magDraaienLinks +
        " "
    );

    return (
      magDraaienLinks && magDraaienBoven && magDraaienOnder && magDraaienRechts
    );
  }
}
