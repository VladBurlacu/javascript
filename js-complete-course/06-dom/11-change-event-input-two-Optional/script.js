/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById(`pass-one`).minLength = 8;
    document.getElementById(`pass-one`).addEventListener(`input`, () => {
        let inputPass = document.getElementById(`pass-one`).value;
        if (inputPass.length <8) {
            document.getElementById(`validity`).innerHTML = `Not ok`;

        } else if(!/(?:.*\d){2}/.test(inputPass)) {
            document.getElementById('validity').innerHTML = 'Add 2 numbers!';
        } else {
            document.getElementById(`validity`).innerHTML = `ok`;
        }
    })
})();
