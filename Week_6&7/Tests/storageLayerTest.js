"use strict";

const {
    getAllFromStorage,
    getFromStorage,
    addToStorage,
    removeFromStorage,
    getKeys,
    primary_key} = require("../EmployeeServer/storageLayer/storageLayer");
const newPerson = {
    "id" : 4,
    "firstname" : "Ricky",
    "lastname" : "Falls",
    "department" : "Transportation",
    "salary" : 4200}
    
const anotherPerson = {
    "id" : "5",
    "firstname" : "Suski",
    "lastname" : "Tree",
    "department" : "Sanitation",
    "salary" : "4200"
}
// getAllFromStorage().then(console.log).catch(console.log)

//  getFromStorage().then(console.log).catch(console.log) // []
//    getFromStorage(1).then(console.log).catch(console.log) // id == 1
//    getFromStorage("1").then(console.log).catch(console.log) // id == 1

//  getFromStorage("Smith","lastname").then(console.log).catch(console.log) // (value, key)

//  getFromStorage("Rebecca","firstname").then(console.log).catch(console.log) // (value, key)

//  getFromStorage("ICT","department").then(console.log).catch(console.log) // (value, key)

//   getFromStorage(4200,"salary").then(console.log).catch(console.log) // (value, key)
//    getFromStorage("4200","salary").then(console.log).catch(console.log) // Works because of adapter

//  addToStorage(newPerson).then(console.log).catch(console.log)

// addToStorage(anotherPerson).then(console.log).catch(console.log) // Works only when adapter is in use

// removeFromStorage(5).then(console.log).catch(console.log)  // Removes whatever number you put in it

//  getKeys().then(console.log).catch(console.log); // Shows all keys in employees.json

console.log(primary_key)