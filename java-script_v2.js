console.log("I am working");

const container = document.querySelector('.container');

const gridElements = document.querySelector('.grid');

const boxElements = document.querySelector('.box');

const randomColors = ['#1F2937',
'#3B82F6',
'#10B981',
'#F59E0B',
'#EF4444',
'#8B5CF6',
'#EC4899',
'#22C55E',
'#06B6D4',
'#EAB308',
'#0F172A',
'#64748B',
'#A855F7',
'#14B8A6',
'#F97316',
'#DC2626',
'#84CC16',
'#38BDF8',
'#F472B6',
'#78350F' ]

function createRow () {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid');
    return newDiv;
}
function randomNumber (max) {
    let randomNum = Math.floor(Math.random() * max);
    return randomNum;
}


function createBoxes (numberofBoxes) {
    let currentRow = container.lastElementChild;
    for (let i = 0; i < numberofBoxes; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        currentRow.appendChild(newDiv);
    }
    
}

function createGrid (userEval) {
    let row_id_number = 0;
    for (let i = 0; i <= userEval; i++) {
        let row = createRow();
        row.id = 'row_' + String(row_id_number);
        ++row_id_number;
        if (i == 0) 
        continue
        else {
            container.appendChild(row);
        }
        createBoxes(userEval);
    }
}

function currentRow_v2 () {
    container.addEventListener('mouseover', function(event){
    if (event.target.classList.contains('grid')) {
        const row = event.target;
        row.addEventListener('mouseover', function(event){
            if (event.target.classList.contains('box')) {
                const box = event.target;
                let randomColorCode = randomNumber(21);
                box.style.backgroundColor = randomColors[randomColorCode];
            }
        })
    }
})
}

function main_1 () {
    currentRow_v2();
}



//document.addEventListener('DOMContentLoaded', () => createGrid(20));

const form = document.getElementById('enter-form');
form.onsubmit = function (event) {
    event.preventDefault();
    const box_container = document.querySelector(".container");
    box_container.replaceChildren();
    const number_of_boxes = document.getElementById("box_number").value;
    console.log(number_of_boxes);
    createGrid(number_of_boxes);
    boxElements.addEventListener('mouseover', main());
}

//boxElements.addEventListener('mouseover', main());

main_1 ();
