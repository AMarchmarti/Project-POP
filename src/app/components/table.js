/*jshint esversion: 6 */
'use strict';

let Table = Object.create(Object);

Table.thead = document.querySelector('thead');
Table.tbody = document.querySelector('tbody');
Table.info = require('../../back/scripts/index');

Table.prototype.tableHeader = function tableHeader() {
    /**
     * Function to create the header of the correlation table, 
     * thanks to the fact that we already have ula functionality and 
     * get the columns in our backend, this function just has to 
     * go through that array and paint what we want
     * @function this.info.columns
     * @return tr
     */
    let tr = document.createElement('tr');
    this.info.columns().forEach(element => {
        let th = document.createElement('th');
        if (element === 'item') {
            th.textContent = 'Eventos';
        } else if (element === 'matrix') {
            th.textContent = 'Matriz de correlación';
        } else {
            th.textContent = 'Ejecución de la función phi';
        }
        tr.appendChild(th);
    });
    return tr;
};

Table.prototype.tableBody = function tableBody() {
    /**
     * This function returns the body of the table. 
     * Use our @function result(), which, as explained in the index.js file, 
     * @returns an array of objects that are the events with their matrices and 
     * their calculation. We also order it from least to greatest, to have 
     * a clearer visuality
     */
    this.info.sortTable().forEach(row => {
        //Create element tr
        let tr = document.createElement('tr');

        //Create element td, which refers at first column and then 
        //its Node text contains the name of Mariano's event
        let tdItem = document.createElement('td');
        tdItem.textContent = row.item;


        // Almost same process than the other one, make a td for second column
        let tdMatrix = document.createElement('td');
        row.matrix.forEach(a => {
            a.forEach(value => {
                let span = document.createElement('span');

                if (row.matrix[0][0] === value) {
                    span.setAttribute('data-md-tooltip', 'Las veces que no ha hecho este evento ni se ha transformado');
                } else if (row.matrix[0][1] === value) {
                    span.setAttribute('data-md-tooltip', 'Las veces que ha hecho esta tarea pero no se ha transformado');
                }
                if (row.matrix[1][0] === value) {
                    span.setAttribute('data-md-tooltip', 'Las veces que se ha transformado pero no ha hecho esta tarea');
                } else {
                    span.setAttribute('data-md-tooltip', 'Las veces que ha efectuado esta tarea se ha transformado en pulpo');
                }
                (row.matrix[1][1] === value) ? span.textContent = `${value}`: span.textContent = `${value} - `;

                tdMatrix.appendChild(span);
            });
        });


        /**
         * This one is particualrity, first of all the content of td is a button, the other
         * is when we click on button, this disappear and then the result of phi can be seen
         */
        let tdPhi = document.createElement('td');
        let spanPhi = document.createElement('span');
        spanPhi.textContent = row.phi;
        spanPhi.style.display = 'none';
        spanPhi.setAttribute('id', row.item);

        tdPhi.appendChild(spanPhi);
        tdPhi.style.display = 'flex';
        tdPhi.style.justifyContent = 'center';
        tdPhi.style.alignItems = 'center';
        tdPhi.appendChild(this.buttonTable(row.item));

        // we put them together in the first element tr
        tr.appendChild(tdItem);
        tr.appendChild(tdMatrix);
        tr.appendChild(tdPhi);

        //we put them together in table body
        this.tbody.appendChild(tr);
    });
};


Table.prototype.buttonTable = function button(item) {
    /**
     * We create the buttons in the table to calculate the probability of each event. 
     * This function creates the button and when you click on it, it will show us the probability
     * @param item -> item that we calculated the probability
     */
    let button = document.createElement('button');
    button.style.display = 'flex';
    button.textContent = `Calcular correlacíon phi de ${item}`;

    // function on click to show the results
    button.onclick = function() {
        let phiDoc = document.getElementById(item);
        phiDoc.style.display = 'flex';
        button.style.display = 'none';
    };
    return button;
};

Table.thead.appendChild(Table.tableHeader());
Table.tableBody();