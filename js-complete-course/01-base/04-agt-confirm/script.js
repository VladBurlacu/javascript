/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later. age gender town



function  ageGenderTown() {
    let q1 = window.prompt(" Age: ");
    let q2 = window.prompt(" Gender: ");
    let q3 = window.prompt(" Town: ");
    let confirmation = confirm(q1 + " " + q2 + " " + q3);
    if (confirmation === false) {
         ageGenderTown();
    }
}

ageGenderTown();