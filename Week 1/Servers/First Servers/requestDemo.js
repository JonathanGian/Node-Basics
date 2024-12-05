"use strict";

const http= require("http");

const {port,host} = require("../config.json");

const server = http.createServer((req,res)=>{
    //console.log(req.url);
    const myurl = new URL(`http://${req.headers.host}${req.url}`);
    
  /*   console.log(myurl) */
    const {pathname} = myurl
    
    /* console.log(req); */
/*     console.log(Object.keys(req)) */
/* console.log("Req Method: ",req.method);
console.log("HTTP Version: ",req.httpVersion);
console.log("Headers: ",req.headers);
console.log("Headers: ",req.headers['user-agent']); */
    
    let message;
    if(pathname==="/pageA"){
        message="pageA";
    } else{
        message = "page not given";
    }
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    res.end(`<h1>${message}</h1>`);
});

server.listen(port,host,()=>
console.log(`Server ${host}: ${port} listening...`))