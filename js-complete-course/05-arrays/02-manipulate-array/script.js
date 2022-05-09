/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener('click', () => {
        fruits.shift(); // This method removes the first item of an array
        fruits.pop(); //This method removes the last item of an array

        fruits.push(`kiwi`); // This method adds items to the end of an array and changes the original array.
        fruits.unshift(`banana`); //This method adds an item(s) to the beginning of an array and changes the original array.

        console.log(fruits)
    })
    // your code here

})();
