"use strict";

(function(){

    let keylist;
    let resultarea;
    let searchvalue;

    document.addEventListener("DOMContentLoaded", init);

    async function init() {
        keylist = document.getElementById("keylist");
        resultarea = document.getElementById("resultarea");
        searchvalue = document.getElementById("searchvalue");

        try {
            const data = await fetch("/keys");
            if(data.ok){
                const keys = await data.json();
                if(keys.length > 0){
                    populateList(keys)
                }else{
                    showMessage("Search not available")
                }
            }else{
                showMessage("Not available")
            }

        } catch (error) {
            showMessage(error);
        }
        
    }// End of Init

    function populateList(keynames){
        for(const field of keynames){
            let option = document.createElement("option");
            option.value = field;
            option.textContent = field;

            keylist.appendChild(option);
        }
        keylist.values=keynames[0];
        keylist.addEventListener("change",clear);
        searchvalue.addEventListener("focus",clear);
        document.getElementById("submit").addEventListener("click", send);
    }
    function showMessage(message) {
        resultarea.innerHTML= `<p>${message}</p>`
    }
    function clear(){
        resultarea.innerHTML = "";
        searchvalue.value = "";
    }

    async function send() {
        const keyName = keylist.value;
        const value = searchvalue.value;

        try {
            const fetchOptions ={
                method:"POST",
                body: JSON.stringify({value,key:keyName}),
                headers: {
                    "Content-Type":"application/json"
                }
            };
            const data = await fetch("/search",fetchOptions);
            const result = await data.json();

            updatePage(result);

        } catch (error) {
            showMessage(error.message);
        }
    }// End of Send

    function updatePage(data) {
        if(!data){
            showMessage("Program error!")
        }else if(data.length === 0){
            showMessage("Nothing found.")
        }else{
            const htmlString = data.map(item => createPerson(item)).join(" ");
            resultarea.innerHTML = htmlString
        }
    }// End of updatePage

    function createPerson(person){
        return `<div class="person">
        <p>ID: ${person.id}</p>
        <p>First Name: ${person.firstname}</p>
        <p>Last Name: ${person.lastname}</p>
        <p>Department: ${person.department}</p>
        <p>Salary: ${person.salary}€</p>
        </div>
        `
    }


})();