# Car Storage API
## cars.json
```json
[
    {
        "model":"Fast GT","license":"ABC-1"
    },
    {
        "model":"Errare","license":"XPR-4"
    },
    {
        "model":"Fast GT","license":"HI-1"
    },
    {
        "model":"Acurra","license":"A-1"
    }
]
```

## **getAllModels()** 
returns the NAMES OF ALL MODELS AS AN ARRAY OF STRINGS. The name is added to the array only once. If nothing is found, an empty array is returned.

### Example

```json
["Fast GT","Errare","Acurra"]
```

## __getCar(key,value)__

Returns an array of all cars that match the given key-value pair.
If there is no match, an empty array is returned.

### Example
```js
getCar("model","Fast GT");
getCar("license","A-1");
```

## __getAllCars()__
Returns all cars in an array or an empty array.

# Carserver Usage
```
http://localhost:3000/cars
```

## Get all models
```
http://localhost:3000/models
```

## Search By License
```
http://localhost:3000/search?key=license&value=ABC-1
```
## Search By Model
```
http://localhost:3000/search?key=model&value=Fast-GT
```