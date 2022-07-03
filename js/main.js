const grid = document.querySelector(".grid");
const sizeText = document.querySelector("h3");
const sizeSlider = document.querySelector("input");
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const clearButton = document.querySelector('#clear');
let size = 16;
let color = 'black';

const setColor = (evt) => {
  color = evt.currentTarget.id;
};

const colorSquare = (event) => {
  const square = event.currentTarget;
  if(color === 'rainbow'){
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  else{
    square.style.backgroundColor = color;
  }
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

blackButton.addEventListener('click', setColor);
rainbowButton.addEventListener('click', setColor);
clearButton.addEventListener('click', createGrid);


sizeSlider.oninput = function () {
  sizeText.textContent = `${this.value}x${this.value}`;
  size = this.value;
  createGrid();
};

createGrid();
