"use strict";

const http = require("http");

const {port, host} = require("../../../config.json");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    res.write("<!DOCTYPE html>")
    res.write( `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My Home</title>
        </head>
        <body>
            <h1>Home</h1>
            <p>Hello, this is my first hosted homepage!</p>
        </body>
        </html>`);
        res.end();
});

server.listen(port,host,
    ()=> console.log(`Server ${host}: ${port} serving...`));