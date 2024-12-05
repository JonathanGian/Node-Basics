# Employee Data Storage

## employees.json
```json
[
    {
        "id" : 1,
        "firstname" : "Tim",
        "lastname" : "Jones",
        "department" : "Admin",
        "salary" : 7000
    },
    {
        "id" : 2,
        "firstname" : "Bob",
        "lastname" : "Smith",
        "department" : "ICT",
        "salary" : 5000
    },
    {
        "id" : 3,
        "firstname" : "Rebecca",
        "lastname" : "Green",
        "department" : "ICT",
        "salary" : 5500
    }
]
```

## storageLayer API

### Private(layer) API 

#### <m>Files</m> 
#### <f>Functions:</f> 

- <m>readerWriter.js</m>
    - <f>readStorage:
        - returns an array of employees or empty []

    - <f>writeStorage:
        - returns true/false

- <m>personAdapter.js</m>
    - <f>adapt</f>
        - casts id and salary to numbers

- <m>storageLayer.js </m>
    - serves the public API
  
    - <f>getAllFromStorage
        - returns an array of employees/ empty []
  
    - <f>getFromStorage
        - returns an array of objects matching the criterion or []
  
    - <f>addToStorage:
        - returns true/false

    - <f>removeFromStorage:
        - return ture/false
    - <f>getKeys:
        - Returns all keys (once) in an array / []

    - primary_key(variable)
        - Returns the unique primary_key

### public(layer) API (dataStorageLayer)

#### <m> Files</m>

- <m>dataStorageLayer.js</m>
    - Datastorage class
    - Top layer of the storage
    - <f>getAll()</f>
        - returns an array of all employees / []
    - <f>get(value,key)</f>
        - Returns an array of matching employees
    - <f>insert(<v>newItem</v>)</f>
        - Returns <v>INSERT_OK</v> / <v>NOT_INSERTERED</v>/ <v>ALREADY/IN_USE</v>
    - <f>remove(<v>value</v>)</f>
        - Returns <v>REMOVE_OK</v> / <v>NOT_REMOVED</v> / <v>NOT_FOUND</v>
    - getter CODES
        - Array of statuscodes
    - getter TYPES
        - Returns an array of types of statuscodes
    - getter KEYS
        - Returns an array of keys / []
    - getter PRIMARY_KEY
        - Unique key for object

- <m>statusCodes.js</m>

```js
const CODES = {
    PROGRAM_ERROR: 0,
    NOT_FOUND: 1,
    INSERT_OK: 2,
    ....
}
```
```JS
const TYPES={
    ERROR: "error",
    INFO: "info"
}
```
The format of status messages:

```js
const MESSAGES={
    PROGRAM_ERROR:()=>({
        message:"Sorry! Error in program",
        code:CODES.PROGRAM_ERROR,
        type:TYPES.ERROR
    }),
    NOT_FOUND:(key,value)=>({
        message:`No resource found with ${key} ${value}`,
        code:CODES.NOT_FOUND,
        type:TYPES.INFO
    }),
    INSERT_OK:(key,value)=>({
        message:`Resource with ${key} ${value} was inserted`,
        code:CODES.INSERT_OK,
        type:TYPES.INFO
    })
}
```



## Notes
- <m>Check if id and salary are actually   numbers in the code and not strings  before writing.</m>


<style>
    m{
        color:yellow;
    }
    f{
        color: violet;
    }
    v{
        color: lightblue;
    }
</style>