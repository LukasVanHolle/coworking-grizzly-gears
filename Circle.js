export default class Circle {
  #cellElement;
  #x;
  #y;
  #zijde1;
  #zijde2;
  #zijde3;
  #zijde4;
  constructor(cellElement, x, y, zijde1, zijde2, zijde3, zijde4) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
    this.#zijde1 = zijde1;
    this.#zijde2 = zijde2;
    this.#zijde3 = zijde3;
    this.#zijde4 = zijde4;
    const bol = document.createElement("div");
    bol.classList.add("bol");

    // voeg het dataveld voor elke zijde toe aan de bol
    bol.dataset.zijde1 = zijde1;
    bol.dataset.zijde2 = zijde2;
    bol.dataset.zijde3 = zijde3;
    bol.dataset.zijde4 = zijde4;
    // controleer elke zijde en voeg een inkeping toe aan de css als de waarde true is
    if (zijde1) {
      const top = document.createElement("div");
      top.classList.add("bol");
      top.classList.add("has-notch-top");
      cellElement.appendChild(top);
    }
    if (zijde2) {
      const right = document.createElement("div");
      right.classList.add("bol");
      right.classList.add("has-notch-right");
      cellElement.appendChild(right);
    }
    if (zijde3) {
      const bottom = document.createElement("div");
      bottom.classList.add("bol");
      bottom.classList.add("has-notch-bottom");
      cellElement.appendChild(bottom);
    }
    if (zijde4) {
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
}
