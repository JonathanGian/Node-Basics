"use strict";

const path = require("path");

const {readStorage,writeStorage} = require("./readerWriter");
const {adapt} = require("./personAdapter");

const storageFilePath=path.join(__dirname,"employees.json");

const PRIMARY_KEY = "id"; // It should not be hard coded like this in our projeject

async function getAllFromStorage(){
    return await readStorage(storageFilePath)
};

async function getFromStorage(value, key = PRIMARY_KEY) {
   const dataArray = await readStorage(storageFilePath)
   const valueLc= value
   return dataArray.filter(item => item[key]==value )// == in case you give the value as a string
//    return (await readStorage(storageFilePath)).filter(person=>person[key]==value)// this also works but shorter
}

// Start of addToStorage

async function addToStorage(newObject) {
    const storage = await readStorage(storageFilePath); // read to storage
    storage.push(adapt(newObject));                            // add newObject to array
    return await writeStorage(storageFilePath,storage)  //

};

async function removeFromStorage(value){ // value is for PRIMARY_KEY
    const storage = await readStorage(storageFilePath);
    const index = storage.findIndex( item => item[PRIMARY_KEY] == value);
    if(index < 0) {
        return false
    };
    storage.splice(index,1);
    return await writeStorage(storageFilePath,storage) 

};
// Start of getKeys
async function getKeys(){
    const storage = await readStorage(storageFilePath);
    const keys = new Set(storage.flatMap(item => Object.keys(item)));

    return [...keys];
}

module.exports={
    getAllFromStorage,
    getFromStorage,
    addToStorage,
    removeFromStorage,
    getKeys,
    primary_key:PRIMARY_KEY
}