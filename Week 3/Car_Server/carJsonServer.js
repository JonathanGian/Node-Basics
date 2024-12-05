// carJsonServer.js

"use strict";

const http = require("http");
const { port, host } = require("./config.json");
const { getAllCars, getAllModels, getCar } = require("./car_storage")


const server = http.createServer((req, res) => {
    const {pathname,searchParams} =
        new URL(`http://${req.headers.host}${req.url}`);
    
    const route = decodeURIComponent(pathname);

    let resultJson = [];
    
    if (route==="/cars"){
        // We dont need to use async function because the data is coming through json and not a server.
        resultJson= getAllCars();
    }else if(route=== "/models"){
        resultJson= getAllModels();
    }else if(route==="/search"){
        resultJson =
        getCar(searchParams.get("key"),searchParams.get("value"))

    }else{
        resultJson = {message:"Not Found"}
    }
    res.writeHead(200,{
        "Content-Type": "application/json",
        "access-control-allow-origin":"*"
    })
    res.end(JSON.stringify(resultJson));
});
server.listen(port,host,()=>console.log(`${host}:${port} is serving.`));