"use strict"

const http = require("http");

const Port = 3000;

const host = "localhost"; // 127.0.0.1

const server = http.createServer((request,response)=>{
    console.log("Server got request");
    response.writeHead(200,{
        "Content-Type": "text/plain"
    });
    response.write("<h1>Hello</h1>");
    response.end();
});

server.listen(Port,host,
    ()=>console.log(`Server ${host}:${Port} is serving.`));
