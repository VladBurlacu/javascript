/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    document.getElementById(`run`).addEventListener(`click`, () => {
        const arr = [];
        for(i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*100))
        }
        const tableCells = document.getElementById(`rows`).children;
        for(i = 0; i < arr.length; i++){
            tableCells[i].innerHTML = arr [i];
        }

        document.getElementById('min').innerHTML = arr.reduce((prev,current) => Math.min(prev,current));
        document.getElementById('max').innerHTML = arr.reduce((prev,current)=>Math.max(prev,current));
        document.getElementById('sum').innerHTML = arr.reduce((prev,current)=>(prev+current));
        document.getElementById('average').innerHTML = arr.reduce((prev,current)=>(prev+current))/arr.length;
    });

})();
