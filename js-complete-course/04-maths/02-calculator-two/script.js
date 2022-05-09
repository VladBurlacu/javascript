/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {

        const firstNum = parseInt(document.getElementById('op-one').value);
        const secondNum = parseInt(document.getElementById('op-two').value);

        switch (operation) {
            case `addition`:document.getElementById('target').innerHTML = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
                break;
            case `substraction`:document.getElementById('target').innerHTML = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
                break;
            case `multiplication`: document.getElementById('target').innerHTML = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
                break;
            case `division`: document.getElementById('target').innerHTML = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
                break;
        }




        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
