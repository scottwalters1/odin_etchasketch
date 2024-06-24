let gridContainer = document.getElementById("gridcontainer");

let resetButton = document.getElementById("resetbutton");

populateGrid(16);

resetButton.addEventListener('click', () => {
    
    let size = prompt("New grid size?");
    if (size > 100) {
        alert("Too big!");
    } else {
        gridContainer.replaceChildren();
        populateGrid(size);
    }
    
});

function populateGrid(size) {

    let cellSize = 100 / size;

    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "gridrow";
        for (let j = 0; j < size; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.className = "gridcell";
            // innerDiv.textContent = "X"
            innerDiv.style.backgroundColor = 'yellow';
            // innerDiv.style.width = `${cellSize}%`;
            // innerDiv.style.height = `${cellSize}%`;
            innerDiv.style.width = '20px';
            innerDiv.style.height = '20px';
            // innerDiv.style.border = '1px solid black';
    
            innerDiv.addEventListener('mouseover', () => {
                innerDiv.style.backgroundColor = 'black';
            });
    
            gridRow.appendChild(innerDiv);
        }
        gridContainer.appendChild(gridRow);
    }

}

