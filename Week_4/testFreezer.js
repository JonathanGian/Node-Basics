"use strict";

const {getAllFlavors, getIceCream, hasFlavor} = require("./IceCreamStorage/IceCreamFreezer");

getAllFlavors().then(console.log).catch(console.log);
getIceCream("vanilla").then(console.log).catch(console.log);
getIceCream("x").then(console.log).catch(console.log);
getIceCream("rasberry").then(console.log).catch(console.log);

/* getIceCream("vanilla") // Get just the price from the Object.
    .then(data=>console.log(data.price))
    .catch(console.log);
 */
hasFlavor("vanilla").then(console.log).catch(console.log)
hasFlavor().then(console.log).catch(console.log)
