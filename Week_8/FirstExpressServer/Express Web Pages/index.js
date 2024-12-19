"use strict";

const path = require("path");

const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

const homePath = path.join(__dirname, "home.html");
const pageBPath = path.join(__dirname, "PageB.html");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(homePath));
app.get("/pageb", (req, res) => res.sendFile(pageBPath));
/* Code for the form */
app.post("/data", express.urlencoded({extended:true}), (req,res) => {
    res.send(`<h1>Received data: ${req.body.firstname} ${req.body.email}</h1>`);
    res.end();

});
/* Sending Json data to server from PageB */
app.post("/datajson", express.json(), (req,res) =>{
    const messageFromBrowser = req.body.message;
    console.log(messageFromBrowser)
    res.json({message: `Server received message: ${messageFromBrowser}`});
})
/* Start Server */
app.listen(port, host,
    () => console.log(`Server is running on http://${host}:${port}`)
);