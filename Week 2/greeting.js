"use strict";

const http = require("http");

const { host, port } = require("./config.json");

const server = http.createServer((req,res)=>{
    const {pathname,searchParams}=
    new URL(`http://${req.headers.host}${req.url}`);

    console.log(pathname,searchParams);

    const route=decodeURIComponent(pathname);

    let message = `${req.headers.host}/search?name=somename`

    if(route==="/greet"){
        if(searchParams.has("name")){
            // const namevalue = searchParams.get("name"); // .get gets the first variable with that name
            const namevalue = searchParams.getAll("name");// .getAll takes all the instances of the variable and puts them into an array.
            message = `Hi ${namevalue}!`;
        }else{
            message="Hi stranger!";
        }
    }
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end(`<h1>Use this format: ${message}</h1>`)
})
server.listen(port,host,
    ()=>console.log(`Server ${host}:${port} is listening`)
);