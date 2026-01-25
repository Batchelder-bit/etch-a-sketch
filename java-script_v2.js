console.log("I am working");

const container = document.querySelector('.container');

function createRow () {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    return newDiv;
}

function createBoxes (numberofBoxes) {
    let currentRow = container.lastElementChild;
    for (let i = 0; i < numberofBoxes; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        currentRow.appendChild(newDiv);
    }
    
}

function returnClosestSquareRoot (number) {
    if (number < 0 || isNaN(number))
        return NaN;

    squareRoot = Math.sqrt(number);
    roundedSquareRoot = Math.round(squareRoot);
    return roundedSquareRoot;
}

function createAllRows(inputNumber) {
    for (let i = 0; i < inputNumber; i++) {
        newRow = createRow();
        container.appendChild(newRow);
    }
}

function createAllBoxes(inputNumber) {
    for (let i = 0; i < inputNumber; i++) {
        newBox = createBox();
        let currentRow = document.querySelector('.grid');
        currentRow.appendChild(newBox);
    }
}

function createRowandBox (inputNumber) {
    oneRow = createAllRows(1);
    for (let i = 0; i < inputNumber; i++) {
        boxes = createAllBoxes(1);
    }
}

/// function main (userInput) {
///    for (let i = 0; i < userInput; i++) {
///        createRowandBox (userInput);
///    }
///} 

function createGrid (userEval) {
    for (let i = 0; i < userEval; i++) {
        let row = createRow();
        if (i == 0) 
        continue
        else {
            container.appendChild(row);
        }
        createBoxes(userEval);
    }
}

function changeMouseColor () {
    
}


document.addEventListener('DOMContentLoaded', () => createGrid(5));