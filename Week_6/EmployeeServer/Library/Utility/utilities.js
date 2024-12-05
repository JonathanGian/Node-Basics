"use strict";

const fs = require("fs").promises;
const path = require("path");

const MIMETYPES = require("./mimeTypes.json");
async function sendFile(res, filePath, contentType = "text/html") {
    try {
        const data = await fs.readFile(filePath, "utf8");
        res.writeHead(200, {
            "Content-Type": contentType,
            "Content-Length": Buffer.byteLength(data, "utf8")
        });
        res.end(data);

    } catch (error) {
        res.statusCode = 404
        res.end(`Error: ${error.message}`);// Just for debugging. Can reveal info about your server. Create your own error messages preferibly
    }
}

const allowedFormats =[
    "application/x-www-form-urlencoded",
    "application/json"
];
// Decodes the data
async function getEncodedPostData(request) {
    return new Promise((resolve,reject)=>{
        const type = request.headers["content-type"];

        if(allowedFormats.includes(type)){// Checks if the format is supported or not
          const databuffer = [];
          request.on("data", messageFragment=>databuffer.push(messageFragment));
          request.on("end",()=>{
            const data = Buffer.concat(databuffer).toString();
            if(type==="application/json"){
                return resolve(JSON.parse(data));
            }else{
                // Converting data into json
                const params = new URLSearchParams(data);
                const jsonResult = {};
                params.forEach((value,name)=>jsonResult[name]=value);
                return resolve(jsonResult);
            }
          });
          request.on("error",()=>reject("Error during transmission!"))

        }else{
            reject("Unsupported Content-Type")
        };
    });
};

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

module.exports = { read, send, sendJson, isIn, getEncodedPostData};
