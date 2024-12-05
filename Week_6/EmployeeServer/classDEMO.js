"use strict";
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const a = new Person("jon","Smith");
console.log(a)
/* Person { firstname: 'jon', lastname: 'Smith' } */
console.log(a.firstname)
a.firstname ="Jon"
console.log(a.firstname)

class Car {
    #name; // Private field
    constructor(name) {
      console.log(`Creating car with name: ${name}`); // Log the input
      this.#name = name; // Assign to private field
    }
    get carName() {
      return this.#name; // Return the private field
    }
    set carName(newName){
        this.#name=newName;
    }
  }
  
  const myCar = new Car("Fast GT");
  
  // Log the entire object
  console.log("Car instance:", myCar);

  console.log("Car.name:", myCar.name);
  /* Undefined */
  // Use the getter to log the car's name
  console.log("Car name via getter:", myCar.carName);
  myCar.name = "Test"
  console.log(myCar)// Prints out a added name

  console.log(myCar.carName)// Prints out the real name

  myCar.carName="Acura"// Change the hidden name

  console.log(myCar.carName)