"use strict";

const path = require("path");
const express = require("express");
const Datastorage = require("./storageLayer/dataStorageLayer");
const storage = new Datastorage();
const app = express();

const {port,host} = require("./config.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

// Default setting true
app.use(express.urlencoded({ extended: true }));
/* Giving access to the Public folder */
app.use(express.static(path.join(__dirname, "Public")));

const homePath = path.join(__dirname, "home.html");

app.get("/", (req, res) =>res.sendFile(homePath));

app.get("/all", (req, res) =>
    storage.getAll()
.then(data => res.render("allPersons", { result: data})))

/* Search Route */
app.get("/search", (req, res)=> res.render("searchPersons", {
    title: "Search",
    header: "Search for an employee",
    action: "/search"
}));
/* Sarch Post Route */
app.post("/search", (req, res) => {
    if (!req.body) return res.sendStatus(418);
    const id = req.body.id;
    storage.get(id).then(result => res.render("personPage", {
        
    }))
})


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}
);