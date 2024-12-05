"use strict";

const http = require("http");
const path = require("path");
const { host, port } = require("./config.json")

const { read, send, sendJson, isIn, getEncodedPostData } = require("./Library/Utility/utilities");

const Datastorage = require("./storageLayer/dataStorageLayer");
const register = new Datastorage();

const resourceRoutes = [
    "/favicon",
    "/Pages",
    "/Styles",
    "/JS",
    "/Images"
];

const homePath = path.join(__dirname, "Menu.html");
//              SERVER
const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(`http://${req.headers.host}${req.url}`);
    const route = decodeURIComponent(pathname);

    const method = req.method.toUpperCase();

    if (method === "GET") {
        if (route === "/") {
            const result = await read(homePath);
            send(res, result);
        }
        else if (route === "/keys") {
            sendJson(res, await register.KEYS)
        }
        else if (route === "/all") {
            sendJson(res, await register.getAll());
        }
        else if (isIn(route, ...resourceRoutes)){
            const result = await read(path.join(__dirname,route));
            if (result.fileData){
                send(res,result);
            }
            else{
                send(res, await read(homePath))
            }
        }else{
            sendJson(res,{message:"Resource not found"},404)
        }
    }else if(method === "POST"){
        // To do
    }
    else{
        sendJson(res,{message:"Method not in use."},405)
    }
}); // END OF SERVER

server.listen(port,host,
    ()=>console.log(`Server ${host}:${port} is serving...`))

/* 
Use http://localhost:3000/keys to get keys

http://localhost:3000/all gets all keys

*/