"use strict";

const data =require("./IceCreamStorage/IceCreams.json")

console.log(data);

console.log(Object.keys(data));

 console.log(Object.keys(data.vanilla));

 console.log(Object.values(data.vanilla)); // Prints out values of an object
 
 console.log(Object.entries(data.vanilla)); // Prints out both field name and values

 