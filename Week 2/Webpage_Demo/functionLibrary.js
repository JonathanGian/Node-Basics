"use strict";

const fs = require("fs").promises;


async function sendFile(res, filePath, contentType= "text/html") {
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

module.exports = { sendFile }