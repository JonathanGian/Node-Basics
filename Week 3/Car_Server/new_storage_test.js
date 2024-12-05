"use strict";

const { log } = require("node:console");// Making log work as console.log()

const { getAllCars,
        getAllModels,
        getCar } = require("./car_storage")

    console.log("getAllCars():",getAllCars());
    console.log("getAllModels():",getAllModels());
    console.log("getAllModels().sort:",getAllModels().sort());
    log("getCar(license,A-1):",getCar("license","A-1"));
    log("getCar(license,ABC-123):",getCar("license","ABC-123"));
    log("getCar(model,Errare):",getCar("model","Errare"));

log(getAllCars())