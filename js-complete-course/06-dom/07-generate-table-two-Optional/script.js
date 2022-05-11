/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let table = document.createElement(`table`);

    for(i = 0; i < 10; i++){
        table.insertRow().innerHTML = `Row number: ${i+1}`

    }
    const tableRows = Array.from(table.getElementsByTagName('tr'))

    tableRows.forEach(row => {
        for (i = 0; i < 10; i++) {
            row.insertCell()
        }
    });

    for(rowCount=0; rowCount < tableRows.length; rowCount++){
        const currentRow = tableRows[rowCount];
        const currentRowValue = currentRow.innerText;
        for(cellCount=0;cellCount<currentRow.cells.length;cellCount++){
            const currentCell = currentRow.cells.item(cellCount);
            currentCell.innerHTML = `* ${cellCount+1} = ${currentRowValue*(cellCount+1)}`;
        }
    }
    document.getElementById('target').appendChild(table)
    // your code here

})();
