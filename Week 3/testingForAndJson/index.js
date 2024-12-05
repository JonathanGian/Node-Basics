"use strict";
const { sendFile, getEncodedPostData } = require("./functionLibrary");

const http = require("http");
const path = require("path");
const { port, host } = require("./config.json");
const menuPath = path.join(__dirname, "menu.html");
const formPath = path.join(__dirname, "form.html");
const jsonForm = path.join(__dirname, "jsonForm.html");

const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(`http://${req.headers.host}${req.url}`);
    const route = decodeURIComponent(pathname);
    const method = req.method.toUpperCase();

    if (method === "GET") {
        if (route === "/") {
            sendFile(res, menuPath)
        } else if (route === "/jsonform") {
            sendFile(res, jsonForm)
        } else if (route === "/urlform") {
            sendFile(res, formPath)
        } else if (route.startsWith("/Styles/")) {
            sendFile(res, path.join(__dirname, route), "text/css");
        } else if (route.startsWith("/JS/")) {
            sendFile(res, path.join(__dirname, route), "text/javascript")
        }else {
            res.end();
        }

    } else if (method === "POST") {
        try {

            const formData = await getEncodedPostData(req);
            if (route === "/formdata") {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify(formData));
            } else if (route === "/jsondata") {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end(JSON.stringify(formData));
            } else {
                res.end(err);
            }
        } catch (error) {

        }
    } else {
        res.end();
    }
});
server.listen(port, host, () => console.log(`${host}:${port} is serving.`))