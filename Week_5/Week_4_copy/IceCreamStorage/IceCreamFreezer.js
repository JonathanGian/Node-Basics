"use strict";

const path = require("path");

const { read } = require("../library/utilities"); // Its not good to hardcode path


const jsonPath = path.join(__dirname, "IceCreams.json");

async function getAllFlavors() {
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return Object.keys(iceCreams);
    }
    catch (err) {
        return [];
    }
} // End of getAllFlavors

async function getIceCream(flavor) {
    try {
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);
        return iceCreams[flavor] || null;

    } catch (error) {
       return null;
    }
} // End of getIceCream

async function hasFlavor(flavor) {
    try{
        const data = await read(jsonPath);
        const iceCreams = await JSON.parse(data.fileData);

        return Object.keys(iceCreams).includes(flavor);

    }catch(error){
        return false;
    }
    
}// End of hasFlavor


module.exports = { getAllFlavors, getIceCream, hasFlavor }