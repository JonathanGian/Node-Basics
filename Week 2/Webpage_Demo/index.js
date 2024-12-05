"use strict";

const http = require("http");
const path = require("path");

const { sendFile } = require("./functionLibrary");

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
    } else if (route.startsWith("/Styles/")) {
        sendFile(res, path.join(__dirname, route), "text/css");// sends the CSS files with this else if
    } else {
        res.end();
    }


    console.log(pathname, route);
});

server.listen(port, host,
    () => console.log(`Server ${host}: ${port} serving...`));


