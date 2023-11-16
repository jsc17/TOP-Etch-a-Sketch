const changeButton = document.querySelector("#change");
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset");
const currentGridDisplay = document.querySelector("#current-grid");
const colorButtons = document.querySelectorAll("input");
let color = "black";

function createGrid(squaresPerSide) {
  gridContainer.replaceChildren();
  let r, g, b;
  for (y = 0; y < squaresPerSide; y++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (x = 0; x < squaresPerSide; x++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.backgroundColor = "rgb(242, 242, 242)";
      square.addEventListener("mouseenter", function (e) {
        switch (color) {
          case "black":
            square.style.backgroundColor = "rgb(0,0,0)";
            break;
          case "grayscale":
            let temp = square.style.backgroundColor.split(",");
            r = parseInt(temp[0].split("(")[1]) - 20;
            g = parseInt(temp[1].substring(1)) - 20;
            b = parseInt(temp[2].split(")")[0]) - 20;
            console.log("rgb(" + r + "," + g + "," + b + ")");
            square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            break;
          case "rainbow":
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            break;
        }
      });
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
  currentGridDisplay.textContent = squaresPerSide + " x " + squaresPerSide;
}

createGrid(16);

colorButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    color = e.target.value;
  });
});

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
    square.style.backgroundColor = "rgb(242, 242, 242)";
  });
});
