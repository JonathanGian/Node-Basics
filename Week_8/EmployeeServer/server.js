"use strict";

const path = require("path");
const express = require("express");
const app = express();
const { host, port } = require("./config.json")
const Datastorage = require("./storageLayer/dataStorageLayer");
const register = new Datastorage();
const homePath = path.join(__dirname, "Menu.html");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>res.sendFile(homePath));

// Get All Keys when going to /keys
app.get("/keys", (req,res) => 
    register.KEYS.then(keys=>res.json(keys)));
// Another version of the above code

// app.get("/keys", async (req,res) => 
//     res.json(await register.KEYS));

/*  Get All Data when going to /all */

// app.get("/all", (req,res) =>
//     register.getAll().then(data =>res.json(data)));
app.get("/all", async (req,res) =>
    res.json(await register.getAll()));
/* Search */

app.post("/search", async (req,res) => {
    const {value, key} = req.body;
    res.json(await register.get(value,key));
});

/* Another way to write the above code */

// app.post("/search", async (req,res) => {
//     res.json(await register.get(req.body.value,req.body.key));
// })
/* Adding employee */
app.post("/add", (req,res) => {
    register.insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});
/* Remove Employee */
app.post("/remove",  (req,res) => {
     register.remove(req.body.value)
    .then(result => res.json(result))
    .catch(err => res.json(err));
}
);


/*  Start Server */
app.listen(port, host, () => console.log(`Server running at http://${host}:${port}`));