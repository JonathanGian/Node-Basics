// readerWriter.js

"use strict";

const { read } = require("fs");

const fs = require("fs").promises

//  Reads JSON files 
async function readStorage(storageFilePath){
    try{
        const data = await fs.readFile(storageFilePath, "utf-8");
        return JSON.parse(data);

    }catch(error){
        console.log(error.message); // For debugging
        return [];
    }

};

// This writes a new JSON file with whatever data = 
async function writeStorage(storageFilePath,data) {
    try{
        await fs.writeFile(storageFilePath, JSON.stringify(data, null, 4),{
                                            encoding : "utf8",
                                            flag : "w"// w is for write(override) instead of "a" for append
                                        }
                                        );
        return true; 
    }catch(error){
        console.log(error.message); // For debugging
        return false;
    }
    
};

module.exports = {readStorage,writeStorage}