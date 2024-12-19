"use strict";
// NEW THINGS: Object.assign(person,{object info})

// personAdapter.js

function adapt(person){
    return Object.assign(person,{
        id: +Number(person.id),
        salary: +Number(person.salary)
        // x:1 // you can also add new fields into the object
    });
};

// Another version

/* function adapt(person){
    return {
        id:+Number(person.id), // Also id:+person.id
        firstname:person.firstname,
        lastname:person.lastname,
        department:person.department,
        salary:+Number(person.salary)
    }
} */

// If no change is to be made, your adapter just passes data:

/* function adapt(person){ // if you dont need to adapt any data
    return person;
} */

module.exports = {adapt}
