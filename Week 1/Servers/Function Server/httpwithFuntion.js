"use strict";

const http=require("http");

const {port,host} = require("../config.json");

const person = require("../person.json");

const server = http.createServer((req,res)=>
{
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    res.end(createHTML(person));
});
server.listen(port,host,
    ()=>console.log(`Server ${host}:${port} serving...`)
)
function createHTML(personData){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Person</title>
    </head>
    <body>
        <h1>Person Data</h1>
        <h2>${personData.firstname} ${personData.lastname}</h2>
    </body>
    </html>`;
}

/* console.log(createHTML(person)); */ // You can test what you are sending to the server first through node