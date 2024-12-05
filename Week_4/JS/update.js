"use strict";

// this demo doesnt handle errors!

(function(){
    let iceCreamList;
    let resultarea;

    document.addEventListener("DOMContentLoaded", init);

    async function init() {
        iceCreamList=document.getElementById("iceCreamList");
        resultarea=document.getElementById("resultarea");

        const data = await fetch("/flavors");
        const flavors = await data.json();

        for(const flavor of flavors){
            const option = document.createElement("option");
            option.value = flavor;
            option.textContent = flavor;
            iceCreamList.appendChild(option);
        }
        iceCreamList.addEventListener("change",choose);
        iceCreamList.value="";
    }
    async function choose() {
        const listValue = iceCreamList.value;
        if (listValue.length>0){
            const data = await fetch(`/icecreams/${listValue}`);
            const result = await data.json();
            showResult(result);
        }
        else{
            resultarea.innerHTML = "";
        }
    function showResult(data){
        let htmlString = `
        <div>
            <p>${data.name}</p>
            <p>${data.price} €</p>
        </div>
        `;
        if (data.image && data.image.length > 0){
            htmlString+=`<img src="/images/${data.image}" />`
        }
        resultarea.innerHTML=htmlString
    }
        
    }

})();