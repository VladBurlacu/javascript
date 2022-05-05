/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    let day = weekDays[date.getDay()];
    let month = months[date.getMonth()];
    let hour = date.getHours();
    let minutes = date.getMinutes();

    document.getElementById(`target`).innerHTML = day + " " + date.getDate() + " " + month + " " + date.getFullYear() + " " + hour + "h" + minutes;


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
