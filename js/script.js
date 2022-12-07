function createBombsArray(min,max)
{
    let bombs =[];
    let i = 0;
    while(i<16){
        let randomnumber = Math.floor(Math.random() * (max - min +1)) + min;

        if(!bombs.includes(randomnumber)){
            bombs.push(randomnumber);
            i++;
        }
    }

    return bombs;
};


// Funzione che determina il numero delle griglie
function createNewGame()
{
    let difficulty = parseInt(document.getElementById(`level`).value);

    let arrayBombs = []
    
    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
            
    }

    genereteGameGrid(cellsNumber, cellsPerRow);

    arrayBombs = createBombsArray(1,cellsNumber)
    console.log(arrayBombs)

}

// Funzione che genera la griglia 
function genereteGameGrid(cellsNumber, cellsPerRow)
{     
    document.querySelector(`.container`).innerHTML = ``;
    
    const grid = document.createElement(`div`);
    grid.classList.add(`grid`);
    
    const grid_side = cellsPerRow * 100;
    
    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;
    
    for(let i=0; i<cellsNumber; i++){
        const cell = createSingleCell(i+1, cellsPerRow);
        cell.addEventListener(`click`, function()
        {
            this.classList.toggle(`clicked`);
        });
        
        grid.appendChild(cell);
        
    }
    
    document.querySelector(`.container`).appendChild(grid);
    
};

// Funzione che crea le singole celle
function createSingleCell(num, cell_per_row)
{
    const cell = document.createElement(`div`)

    cell.classList.add(`square`);

    let sideLength = `100px`;

    cell.style.width = sideLength;
    cell.style.height = sideLength;

    cell.innerText = num;

    return cell

}

// Dichiaro fuori la funzione
document.getElementById(`play-game`).addEventListener(`click`, function() 
{     
    createNewGame();
});
