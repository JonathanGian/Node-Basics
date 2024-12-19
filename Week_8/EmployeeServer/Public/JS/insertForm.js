"use strict";

(function(){

    let resultarea;

    document.addEventListener("DOMContentLoaded", init)

    function init(){
        resultarea = document.getElementById("resultarea");
        document.getElementById("form").addEventListener("submit",send);
        document.getElementById("form").addEventListener("reset",clear);
    
    }// End of init

    function clear(){
       
        resultarea.innerHTML = ""
        resultarea.removeAttribute("class");
       
    }

    async function send(e){
        e.preventDefault();
        const dataFromForm = new FormData(e.target);
        const dataJson = Object.fromEntries(dataFromForm.entries()) // Creates an Object to send to the backend (dataJson)
   //     console.log(dataJson)

        try {
            const fetchOptions = {
                method : "POST",
                body : JSON.stringify(dataJson),
                headers : {
                    "Content-Type" : "application/json"
                }
            };
            const data = await fetch("/add",fetchOptions);
            const result = await data.json();
            showStatus(result);

        } catch (error) {
            showStatus({
                message:error.message,
                type:"error"
            })
        }
    }// End of send

    function showStatus(status){
        resultarea.textContent = status.message;
        resultarea.setAttribute("class", status.type)
    }

})();