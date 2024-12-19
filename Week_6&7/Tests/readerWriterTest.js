"use strict";

const {readStorage,writeStorage} = require("../EmployeeServer/storageLayer/readerWriter");

readStorage("./storageLayer/employees.json").then(console.log).catch(console.log)

// this will write a new test.json file with the 2nd parameters data
// writeStorage("./test.json",{a:2,b:1}).then(console.log).catch(console.log); 


// Returns false because folder aa does not exist

//writeStorage("./aa/test.json",{a:2,b:1}).then(console.log).catch(console.log); 

//  Returns empty array [] because file doesnt exist

//  readerStorage("./storageLayer/employeesx.json").then(console.log).catch(console.log)
