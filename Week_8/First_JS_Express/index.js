"use strict";

const path = require("path");
const express = require("express");
const { title } = require("process");
const app = express();

const port = 3000;
const host = "localhost";
const HomePath = path.join(__dirname, "home.html");
/* Without this you dont get the body */
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
/* Path to pagetemplates folder */
app.set("views", path.join(__dirname, "pagetemplates"));


app.get("/", (req, res) => res.sendFile(HomePath));

const users = {
    "Matt": "password",
    "Mary": "1234",
    "John": "asdf"
}

// app.post("/login", (req, res) =>{
//     /* You get back the body as JSON */
//     // console.log(req.body);
//     // console.log(req.body.password)
//     res.render("result", {
//         title : "Your Data",
//         header: "You sent these",
//         data:{
//             username: req.body.username,
//             password: req.body.password
//         }
//     });
//})
app.post("/login", (req, res) =>{
   const{username, password} = req.body;
   if (Object.keys(users).includes(username) && users[username] === password){
       res.render("result", {
           title : "Your Data",
           header: "You sent these",
           data:{
               username: req.body.username,
               password: req.body.password
           }
       });
    }else{
       res.render("userlist", {
              title: "User List",
              header: "User List",
              users: Object.keys(users)
       })
    }
})
// app.post("/login", (req, res) =>{
//    const{username, password} = req.body;
//    if (Object.keys(users).includes(username) && users[username] === password){
//        res.render("result", {
//            title : "Your Data",
//            header: "You sent these",
//            data:{
//                username: req.body.username,
//                password: req.body.password
//            }
//        });
//     }else{
//         res.render("errorPage", {username});
//     }
// })

app.listen(port, host, () => console.log(`Server is running on http://${host}:${port}`));