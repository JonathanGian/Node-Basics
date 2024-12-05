"use strict";

const Datastorage = require("../EmployeeServer/storageLayer/dataStorageLayer");

const register = new Datastorage();
// DONT USE () AFTER CODES
console.log(register.CODES)
/* {
  PROGRAM_ERROR: 0,
  NOT_FOUND: 1,
  INSERT_OK: 2,
  NOT_INSERTED: 3,
  ALREADY_IN_USE: 4,
  REMOVE_OK: 5,
  NOT_REMOVED: 6
} */
console.log(register.TYPES) // { ERROR: 'error', INFO: 'info' }
console.log(register.PRIMARY_KEY)// id

// KEYS are async
// console.log(register.KEYS);// Doesnt work 
// Promise { <pending> }

register.KEYS.then(console.log);
/* [ 'id', 'firstname', 'lastname', 'department', 'salary' ] */

register.getAll().then(console.log);
/* [
  {
    id: 1,
    firstname: 'Tim',
    lastname: 'Jones',
    department: 'Admin',
    salary: 7000
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Smith',
    department: 'ICT',
    salary: 5000
  },
  {
    id: 3,
    firstname: 'Rebecca',
    lastname: 'Green',
    department: 'ICT',
    salary: 5500
  },
  {
    id: 4,
    firstname: 'Ricky',
    lastname: 'Falls',
    department: 'Transportation',
    salary: 4200
  }
] */
//register.get(2).then(console.log);
//register.get(20).then(console.log);
register.get("Green","lastname").then(console.log);

/* const Tim = {
    id: 1,
    firstname: 'Tim',
    lastname: 'Jones',
    department: 'Admin',
    salary: 7000
  }; */
/* const Tim = {
    id: 0,
    firstname: 'Tim',
    lastname: 'Jones',
    department: 'Admin',
    salary: 7000
  }; */
const Tim = {
    id: 10,
    firstname: 'Tim',
    lastname: 'Jones',
    department: 'Admin',
    salary: 7000
  }; 
/* const Tim = {
    
    firstname: 'Tim',
    lastname: 'Jones',
    department: 'Admin',
    salary: 7000
  }; */

  //register.insert(Tim).then(console.log).catch(console.log)

 // register.remove(10).then(console.log).catch(console.log) // Removes id 10 
 // register.remove().then(console.log).catch(console.log) // Doesnt remove anything