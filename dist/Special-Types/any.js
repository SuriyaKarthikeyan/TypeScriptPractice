"use strict";
//specify any datatype. skips the type check.
Object.defineProperty(exports, "__esModule", { value: true });
//With any datatype
let a = true;
a = "welcome"; //doesnt show error due to any data type. skips type checking
console.log(Math.round(a));
//Without any datatype. TS uses inference to determine datatype when assigning values.
let b = true;
b = "welcome"; //shows compile error
console.log(Math.round(b)); //shows compile error
//# sourceMappingURL=any.js.map