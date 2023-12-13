const button = document.querySelector("button")
const container = document.querySelector(".container");

function createGrid(rows, cols) {
    container.innerHTML = ""
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "gridItem";
    let placeColor = document.querySelectorAll(".gridItem");

    placeColor.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
            item.style.border = "1px solid #464646"
        });
    });
  };
};


button.addEventListener('click', () => {
    var input = parseInt(prompt("how many rows and columns do you want?"))
    if (input > 50){
        alert("too high, stay under 50");
    } else {
        createGrid(input, input);
    }
})
