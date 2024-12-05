"use strict";

const http = require("http");

const port = 3000;
const host = "localhost";

const person = {
    firstname: "Matt",
    lastname: "River"
};

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json"
    });
    res.write(JSON.stringify(person));// Always have to stringify the JSON before sending it to server
    res.end();
});

server.listen(port,host,
    ()=>console.log(`Json server at ${host}:${port}`)
    );