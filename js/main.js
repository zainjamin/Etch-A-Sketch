const grid = document.querySelector(".grid");
const sizeText = document.querySelector("h3");
const sizeSlider = document.querySelector("input");
let size = 16;

const colorSquare = (event) => {
  const square = event.currentTarget;
  square.style.backgroundColor = 'black';
};

const createGrid = () => {
  grid.replaceChildren();
  grid.setAttribute(
    "style",
    ` grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
  );
  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);
    grid.appendChild(square);
  }
};

sizeSlider.oninput = function () {
  sizeText.textContent = `${this.value}x${this.value}`;
  size = this.value;
  createGrid();
};

createGrid();
