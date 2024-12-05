"use strict";
(function(){
    let firstNameField;
    let lastNameField;
    let result;

    document.addEventListener("DOMContentLoaded",init);
    function init() {
        firstNameField=document.getElementById("firstname")
        lastNameField=document.getElementById("lastname")
        result = document.getElementById("result");

        document.getElementById("send").addEventListener("click",submit);
    };
    async function submit() {
        const firstname= firstNameField.value
        const lastname= lastNameField.value
        const options = {
            method:"POST", // Can also use PUT,GET
            body: JSON.stringify({firstname,lastname}),
            headers:{
                "Content-Type":"application/json"
            }
        }
        const data = await fetch("/jsondata",options);
        const jsonData = await data.json();
        result.textContent=JSON.stringify(jsonData,null,4);
    }
})();