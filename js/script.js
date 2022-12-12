function createBombsArray(min,max)
{
    let bombs =[];
    let i = 0;
    while(i < 16){
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
    let arrayBombs = createBombsArray(1, cellsNumber)
    console.log(arrayBombs)

    genereteGameGrid(arrayBombs,cellsNumber, cellsPerRow);

}

//Funzione che mostra tutte le bombe
function showAllBombs (bombs_array)
{
    const cells = document.getElementsByClassName(`square`);

    for(let i = 0; i < cells.length; i++){
        let cell = cells[i];
        if (bombs_array.includes(parseInt(cell.innerText))){
            cell.classList.add(`clicked`);
            cell.classList.add(`red`);
        };
    };
};

// Funzione che genera la griglia 
function genereteGameGrid(bombs_array, cellsNumber, cellsPerRow)
{     
    document.querySelector(`.container`).innerHTML = ``;
    
    const grid = document.createElement(`div`);
    grid.classList.add(`grid`);
    
    const grid_side = cellsPerRow * 100;
    
    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;

    let goodCell = 0;
    
    for(let i=0; i<cellsNumber; i++){
        const cell = createSingleCell(i+1, cellsPerRow);
        cell.addEventListener(`click`, function()
        {
            this.classList.toggle(`clicked`);
            if(bombs_array.includes(parseInt(this.innerText))){
                this.classList.add(`red`)
                grid.classList.add(`events-none`)
                showAllBombs(bombs_array);
                
                alert(`hai perso una bomba` + this.innerText);
                alert(goodCell);
            } else {
                goodCell++;
            }
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
