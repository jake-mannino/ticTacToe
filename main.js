const app = document.getElementById("app");
const container = document.getElementById("container");
const grid = document.getElementById("grid");
//let tileClickability = true;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let turnNum = 0;
let clickArray = [null, null, null, null, null, null, null, null, null];
let colArray = [];
let gameStatus = "in progress";
let possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
// i[0,1,2]
function win() {
    for (let i = 0; i < possibleWins.length; i++) {
        let sumArray = []
        if (clickArray[i] !== null) {
            for (let k = 0; k < possibleWins[i].length; k++) {
                if (clickArray[possibleWins[i][k]] !== null) {
                    // sumArray.push(clickArray[possibleWins[i][k]].value);
                    console.log(clickArray[possibleWins[i][k]]);
                }
                if (sumArray.length == 3) {
                    var sum = sumArray.reduce(reducer);
                    console.log(sum)
                    if (sum == null || sum !== 6 || sum !== 24) {
                        winCondition = false;
                        gameStatus = "in progress";
                    } else if (sum == 6) {
                        winCondition = true;
                        gameStatus = "X wins";
                    } else if (sum == 24) {
                        winCondition = true;
                        gameStatus = "O wins";
                    }
                }
            }
            console.log(gameStatus);
        }
    }
   
}
//make columns classes with clickability member
function turn(e) {
    const Ximg = document.createElement("img");
    Ximg.src = "imgs/X.svg";
    Ximg.style = "vertical-align: middle";
    const Oimg = document.createElement("img");
    Oimg.src = "imgs/O.svg";
    console.log(this);
    tileClickability = true;
    // function XO () {
    // for (let clickArray[i] = 0; i <= 8; i++) {
    //class tile constructor, this. has been click
    if (turnNum % 2 == 0 && this.tileClickability !== false) {
        let m = new Move(e.target.id, 'X', 2)
        clickArray[e.target.id] = m;
        this.appendChild(Ximg);
        this.tileClickability = false;
        // this.type = 'X';
        // this.value = 2;
    } else if (turnNum % 2 !== 0 && this.tileClickability !== false) {
        let m = new Move(e.target.id, 'O', 8)
        clickArray[e.target.id] = m;
        this.appendChild(Oimg);
        this.tileClickability = false;
        // this.type = 'O';
        // this.value = 8;
    } else {
        this.tileClickability = false;
    }
    turnNum++;
    win();
    console.log(clickArray);
}
function makeGrid(r, c) {
    console.log(r, c);
    let z = 0;
    for (let i = 0; i < r; i++) {
        let row = document.createElement("div");
        row.className = ("row align-items-center justify-content-center")
        for (let j = 0; j < c; j++) {
            let column = document.createElement("div");
            // let colObj = new Move(z);
            colArray.push(column);
            column.id = z;
            column.className = "col-4 py-2 redbox align-items-center justify-content-center vertical-align:middle";
            z++;
            console.log("in for loop", column, z);
            column.addEventListener('click', turn);
            row.appendChild(column);
        }
        app.appendChild(row);
    }
    console.log(colArray);
};
class Move {
    constructor(id, type, value) {
        this.tileClickability = true
        this.id = id;
        this.type = type;
        this.value = value;
    }
}
makeGrid(3, 3);

//
// console.log(clickArray);
// class Grid{

// row1 = [clickArray[0],clickArray[1],clickArray[2]]
// row2 = [clickArray[3],clickArray[4],clickArray[5]]
// row3 = [clickArray[6],clickArray[7],clickArray[8]]
//          col1 = [clickArray[0],clickArray[3],clickArray[6]]
//          col2 = [clickArray[1], clickArray[4], clickArray[7]]
//          col3 = [clickArray[2],clickArray[5],clickArray[8]]
//              diagonal1 = [clickArray[0],clickArray[4],clickArray[8]]
//              diagonal2 = [clickArray[2],clickArray[4],clickArray[6]]
// }
// function gameStatus () {

// if (sum(row1) == 6 || sum(row2) == 6|| sum(row3) == 6 || sum(col1) == 6 || sum(col2) == 6 || sum(col3) == 6 || sum(diagonal1) == 6 || sum(diagonal2) == 6){
//     gameStatus = 'X wins';
//     winCondition = true

// } else if (sum(row1) == 24 || sum(row2) == 24|| sum(row3) == 24 || sum(col1) == 24 || sum(col2) == 24 || sum(col3) == 24 || sum(diagonal1) == 24 || sum(diagonal2) == 24){
//     gameStatus = 'O wins';
//     winCondition = true
// }
// else {
//     gameStatus = 'in Progress'
//     winCondition = false
// }
// return gameStatus;
// }

//controller

//bind the scope of our class to our function, .this, clickability within the scope of the tile class


/* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */
//mediaQuery in bootstrap in css or , funciton of viewport, soon as render to set tile size

       // let row1 = [clickArray[0].value, clickArray[1].value, clickArray[2].value];
        // let row2 = [clickArray[3].value, clickArray[4].value, clickArray[5].value];
        // let row3 = [clickArray[6].value, clickArray[7].value, clickArray[8].value];
        // let col1 = [clickArray[0].value, clickArray[3].value, clickArray[6]].value;
        // let col2 = [clickArray[1].value, clickArray[4].value, clickArray[7]].value;
        // let col3 = [clickArray[2].value, clickArray[5].value, clickArray[8].value];
        // let diagonal1 = [clickArray[0].value, clickArray[4].value, clickArray[8].value];
        // let diagonal2 = [clickArray[2].value, clickArray[4].value, clickArray[6].value];


        // if (sum(row1) == 6 || sum(row2) == 6 || sum(row3) == 6 || sum(col1) == 6 || sum(col2) == 6 || sum(col3) == 6 || sum(diagonal1) == 6 || sum(diagonal2) == 6) {
        //     gameStatus = 'X wins';
        //     winCondition = true;

        // }
        // else if (sum(row1) == 24 || sum(row2) == 24 || sum(row3) == 24 || sum(col1) == 24 || sum(col2) == 24 || sum(col3) == 24 || sum(diagonal1) == 24 || sum(diagonal2) == 24) {
        //     gameStatus = 'O wins';
        //     winCondition = true;
        // }
        // else {
        //     gameStatus = 'in Progress';
        //     winCondition = false;
        // }

                      //     // if clickArray[possibleWins[i]sum([k].value) == 6 || sum((clickArray[[possibleWins[i][k] == 24){
                //     //     winCondition == true;
                //     //     console.log(k)
                //     // }
                //     //check to see if the postion in click array is not null
                //     //if not, rememebr  whats in the first clickarray index 
                //     if (sum)
                // }