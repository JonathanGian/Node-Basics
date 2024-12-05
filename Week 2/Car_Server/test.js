"use strict";
const { log } = require("node:console");
// This is a longer version of the getAllModels() functions
const cars = require("./cars.json");

const temp = cars.map(car=>car.model);

console.log(temp);

const models = [... new Set(temp)];

console.log(models);

log(` <li>${models.join("</li>\n<li>")}</li>`)