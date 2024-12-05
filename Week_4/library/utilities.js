"use strict";

const fs = require("fs").promises;
const path = require("path");

const MIMETYPES = require("./mimeTypes.json");


function read(filePath) {
    const extension = path.extname(filePath).toLowerCase();// This just gets the extension
    /* console.log (extension) */
    const mime =
        MIMETYPES[extension] || {
                                        "type": "application/octet-stream",
                                        "encoding": "binary"
                                    };
    return fs.readFile(filePath, mime.encoding)
        .then(fileData => ({ fileData, mime }))
        // Longer version : .then(fileData=>({fileData:fileData, mime:mime}))
        .catch(err => err);//Just for debugging
    
        /* 
    {
        fileData:"",
        mime:{type:"", encoding:""}
    } */

};   // End of Read

function send(res, resource) {// Resourse is an object = {fileData,mime}
    res.writeHead(200, {
        "Content-Type": resource.mime.type,
        "Content-Length": Buffer.byteLength(resource.fileData,
            resource.mime.encoding)
    });
    res.end(resource.fileData, resource.mime.encoding);
};

function sendJson(res,jsonResource, statuscode= 200){
    const jsonData = JSON.stringify(jsonResource);
    res.writeHead(statuscode,{"Content-Type":"application/json"});
    res.end(jsonData);
}

function isIn(route, ...routes){
    for(const start of routes){
        if(route.startsWith(start)) return true;
    }
    return false;
}

module.exports = { read, send, sendJson, isIn};
