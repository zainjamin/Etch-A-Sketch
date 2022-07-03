const grid = document.querySelector('.grid');
grid.setAttribute('style', 'grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);');
for(let i = 0; i<16*16; i++){
  const square = document.createElement('div');
  square.style.border = '2px solid black';
  grid.appendChild(square);
}