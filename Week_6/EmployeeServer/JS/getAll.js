"use strict";

(function () {
    document.addEventListener("DOMContentLoaded", init);

    async function init() {
        // No error checking
        const data = await fetch("/all");
        const result = await data.json();

        const resultset = document.getElementById("resultset");

        for (const person of result){
            resultset.appendChild(createTableRow(person));
        }
    }// End of init function


// Create Cell Function
    function createCell(data){
        const td = document.createElement("td");
        td.textContent = data;
        return td
    }

    // Create Table Rows Function
    function createTableRow(person){
        const tr = document.createElement("tr");
        tr.appendChild(createCell(person.id));
        tr.appendChild(createCell(person.firstname));
        tr.appendChild(createCell(person.lastname));
        tr.appendChild(createCell(person.department));
        tr.appendChild(createCell(person.salary));
        return tr;
    }
}())