"use strict";

const http = require("http");
const fs = require("fs").promises;

const path = require("path");

const { port, host } = require("./config.json");
const { readFile } = require("fs");

const homePath = path.join(__dirname, "home.html");

/* console.log(homePath) */

const hobbiesPath = path.join(__dirname, "hobbies.html");

const server = http.createServer((req, res) => {
    const { pathname } =
        new URL(`http://${req.headers.host}${req.url}`);

    const route = decodeURIComponent(pathname);// Decodes if someone uses ÖÄ in browser path
    if (route === "/") {
        sendFile(res, homePath);
    } else if (route === "/hobbies") {
        sendFile(res, hobbiesPath);
    } else {
        res.end();
    }


    console.log(pathname, route);
});

server.listen(port, host,
    () => console.log(`Server ${host}: ${port} serving...`));

async function sendFile(res, filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Content-Length": Buffer.byteLength(data, "utf8")
        });
        res.end(data);

    } catch (error) {
        res.statusCode = 404
        res.end(`Error: ${error.message}`);// Just for debugging. Can reveal info about your server. Create your own error messages preferibly
    }
}
