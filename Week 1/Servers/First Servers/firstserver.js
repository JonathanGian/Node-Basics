"use strict"

const http = require("http");

const Port = 3001;

const host = "localhost"; // 127.0.0.1

const server = http.createServer((request,response)=>{
    console.log("Server got request");
    response.writeHead(200,{  // Status code 200 = OK
        "Content-Type": "text/html"
    });
    response.write("<h1>Hello</h1>");
    response.write("<p>weqweawewew</p>");
    response.end();
});

server.listen(Port,host,// This starts the actual server with the listen command
    ()=>console.log(`Server ${host}:${Port} is serving.`));
