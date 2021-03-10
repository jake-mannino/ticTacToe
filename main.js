const app = document.getElementById("app");
const container = document.getElementById("container");
const grid = document.getElementById("grid");

const Ximg = document.createElement("img");
Ximg.src = "imgs/X.svg";
Ximg.style ="vertical-align: middle";

const Oimg = document.createElement("img");
Oimg.src = "imgs/O.svg";

let turnNum = 0;
let clickArray = [];
//make columns classes with clickability member

function makeGrid(r, c) {
   console.log(r,c);
    let z = 0;
    for (let i = 0; i < r; i++) {
        
        let row = document.createElement("div");
        row.className = ("row align-items-center justify-content-center")
        for (let j = 0; j < c; j++) {
            let column = document.createElement("div");
            column.id = z;
            
            column.className = "col-4 py-2 redbox align-items-center justify-content-center vertical-align:middle";
            z++;
            console.log("in forloop", column, z);
            column.addEventListener('click', function turn() {
                //move the function outside of my makegrid function but leave addeventlistener where it is

                console.log(turnNum);
                clickArray.push(turnNum);
                // function XO () {
                // for (let clickArray[i] = 0; i <= 8; i++) {
                if (clickArray[turnNum] % 2 == 0) {
                    column.appendChild(Ximg);
                   

                }
                else {
                    column.appendChild(Oimg);
                    
                }
                turnNum++;
                // }
                // }

            });
            row.appendChild(column);
        }
        app.appendChild(row);
    }


};



makeGrid(3, 3);


//controller

//bind the scope of our class to our function, .this, clickability within the scope of the tile class


/* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */
//mediaQuery in bootstrap in css or , funciton of viewport, soon as render to set tile size