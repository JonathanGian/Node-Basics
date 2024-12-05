"use strict";

const { URLSearchParams } = require("url");

const fs = require("fs").promises;

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


module.exports = { sendFile,getEncodedPostData }