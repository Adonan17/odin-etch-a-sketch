// var container = document.querySelector(".container")



// button.addEventListener('click', () => {
//     container.innerHTML = ""
//     var input = +prompt("how many rows and columns do you want?")
//     if (input > 50){
//         alert("too high, stay under 50");
//     } else {
//         for (let i = 0; i < (input*input); i++) {
//             container.innerHTML += "<div class='gridItem'><div>";
//         }
//     }
// })

const button = document.querySelector("button")
const container = document.querySelector(".container");

function makeRows(rows, cols) {
    container.innerHTML = ""
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "gridItem";
  };
};

button.addEventListener('click', () => {
    var input = parseInt(prompt("how many rows and columns do you want?"))
    if (input > 50){
        alert("too high, stay under 50");
    } else {
        makeRows(input, input);
    }
})

gridItem.addEventListener('onmouseover', function(){
    gridItem.style.backgroundColor = 'black';
});
