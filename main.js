const app = document.getElementById("app");
const container = document.getElementById("container");
const grid = document.getElementById("grid");

//let tileClickability = true;

let turnNum = 0;
let clickArray = [];
let colArray = [];
//make columns classes with clickability member
function turn() {
    //move the function outside of my makegrid function but leave addeventlistener where it is
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


    if (turnNum % 2 == 0 && this.tileClickability !== false)  {
        clickArray.push(2);
        this.appendChild(Ximg);
        this.tileClickability = false;
        

    } else if (turnNum % 2 !== 0 && this.tileClickability !== false) {
        this.appendChild(Oimg);
        this.tileClickability = false;
        clickArray.push(8);
    } else {
        this.tileClickability = false;
    }



    turnNum++;
    // }
    // }

}
function makeGrid(r, c) {
    console.log(r, c);
    let z = 0;
    for (let i = 0; i < r; i++) {

        let row = document.createElement("div");
        row.className = ("row align-items-center justify-content-center")
        for (let j = 0; j < c; j++) {
            let column = document.createElement("div");
            let colObj = new Column(z);
            colArray.push(colObj);
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





class Column {
    constructor (id){
        this.tileClickability = true
        this.id = id;
    }



}
makeGrid(3, 3);



// row1 = [0,1,2]
// row2 = [0,1,2]
// row3 = [0,1,2]
//     col1 = [row1[0], row2[0],  row3[0]]
//     col2 = [row1[1], row2[1], row3[1]]
//     col3 = [row1[2], row2[2], row3[2]]
//         diagonal1 = [row1[0], row2[1], row3[2]]
//         diagonal2 = [row1[2], row2[1], row3[0]]

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