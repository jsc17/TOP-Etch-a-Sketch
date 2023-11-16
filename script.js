const changeButton = document.querySelector("#change");
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset");

function createGrid(squaresPerSide) {
  gridContainer.replaceChildren();
  for (y = 0; y < squaresPerSide; y++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (x = 0; x < squaresPerSide; x++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.addEventListener("mouseenter", function (e) {
        square.style.background = "black";
      });
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

createGrid(16);

changeButton.addEventListener("click", function () {
  let squaresPerSide = 101;
  while (squaresPerSide > 100) {
    squaresPerSide = prompt(
      "Please enter number of squares per side of the grid (max 100):"
    );
  }

  createGrid(squaresPerSide);
});

resetButton.addEventListener("click", function () {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.background = "white";
  });
});
