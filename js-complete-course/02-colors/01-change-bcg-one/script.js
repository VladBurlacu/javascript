/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let btnRed = document.getElementById(`red`);
let btnGreen = document.getElementById(`green`);
let btnYellow = document.getElementById(`yellow`);
let btnBlue = document.getElementById(`blue`);

btnRed.addEventListener('click',changeBgToRed);
btnGreen.addEventListener('click',changeBgToGreen);
btnYellow.addEventListener('click',changeBgToYellow);
btnBlue.addEventListener('click',changeBgToBlue);

function changeBgToRed(){
    document.body.style.backgroundColor = "red"
}
function changeBgToGreen(){
    document.body.style.backgroundColor = "green"
}
function changeBgToYellow(){
    document.body.style.backgroundColor = "yellow"
}
function changeBgToBlue(){
    document.body.style.backgroundColor = "blue"
}
