"use strict";

const {CODES,TYPES,MESSAGES} = require("../EmployeeServer/storageLayer/statusCodes")

/* console.log(CODES)
console.log(TYPES)
console.log(MESSAGES)

console.log(MESSAGES.PROGRAM_ERROR())
 */
const status = MESSAGES.NOT_FOUND("ID",3);

console.log(status)
if (status.code===CODES.NOT_FOUND){// always use the CODES and not an actual number
    console.log("############")
    console.log("Status:",status.message)
    console.log("code:",status.code)
}else{
    console.log("????")
}