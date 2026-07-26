//specify any datatype. skips the type check.

//With any datatype
let a: any = true;
a="welcome"; //doesnt show error due to any data type. skips type checking
console.log(Math.round(a));

//Without any datatype. TS uses inference to determine datatype when assigning values.
let b = true;
b="welcome"; //shows compile error
console.log(Math.round(b));//shows compile error