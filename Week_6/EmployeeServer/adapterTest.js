"use strict";

const {adapt} = require("./storageLayer/personAdapter")

const test = {
    "id" : "2",
    "firstname" : "Bob",
    "lastname" : "Smith",
    "department" : "ICT",
    "salary" : 5000
}

console.log(adapt(test));