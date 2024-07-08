const container = document.querySelector("#container")
const button = document.querySelector("#button")
let numberOfRows = 16;

button.addEventListener("click", (e) => {
    deletedRows = numberOfRows
    numberOfRows = prompt("Choose number of squares per side max 99");
    if (numberOfRows > 99) {
        while (numberOfRows > 99 || numberOfRows) {
            numberOfRows = prompt("Choose number of squares per side max 99");
        }
    }
    deleteRows();
    createGrid();
})


function deleteRows (){
    const rows = document.querySelectorAll("#row");
    rows.forEach((row) => {
        row.remove()
    });
}

function createGrid(){
    for (let i = 0; i < numberOfRows; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", "row");
        row.classList.add("rows");
        container.appendChild(row);
        for(let j = 0; j < numberOfRows; j++) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let column = document.createElement("div");
            column.setAttribute("id", "column");
            column.classList.add("columns");
            row.appendChild(column);
            let sizeOfCube = Math.round(980 / numberOfRows);
            column.style.width = `${sizeOfCube}px`;
            column.style.height = `${sizeOfCube}px`;
            let opacity = 0.2;
            column.addEventListener("mouseover", (e) => {
                opacity += 0.1
                column.style["opacity"] = opacity;
                column.style["background-color"] = "#" + randomColor;
            })
        }
    }
}

createGrid();
