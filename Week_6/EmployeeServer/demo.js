const test = [
    {
        "id": 1,
        "firstname": "Tim",
        "lastname": "Jones",
        "department": "Admin",
        "salary": 7000
    },
    {
        "id": 2,
        "firstname": "Bob",
        "lastname": "Smith",
        "department": "ICT",
        "salary": 5000,
        "x":"something" // Added random field
    },
    {
        "id": 3,
        "firstname": "Rebecca",
        "lastname": "Green",
        "department": "ICT",
        "salary": 5500
    }
];

//          FLAT MAP

const map = test.map(item=>Object.keys(item));
console.log("Map",map)

const keysOfFirst=Object.keys(test[0])
console.log("test[0],keysOfFirst: ",test[0],keysOfFirst)
/*  id: 1,
  firstname: 'Tim',
  lastname: 'Jones',
  department: 'Admin',
  salary: 7000
} [ 'id', 'firstname', 'lastname', 'department', 'salary' ] */
  
const temp = test.flatMap(item=>Object.keys(item));
console.log("flatMap",temp);
 /* [
    'id',         'firstname',
    'lastname',   'department',
    'salary',     'id',
    'firstname',  'lastname',
    'department', 'salary',
    'x',          'id',
    'firstname',  'lastname',
    'department', 'salary'
  ] */

const keys = new Set(temp);// removes duplicates

console.log("Flatmap with Set",keys) // Set(6) { 'id', 'firstname', 'lastname', 'department', 'salary', 'x' }

console.log("...keys",[...keys]) // [ 'id', 'firstname', 'lastname', 'department', 'salary', 'x' ]