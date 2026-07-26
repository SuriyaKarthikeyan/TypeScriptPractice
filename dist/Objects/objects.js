"use strict";
/***
 *  Object types in Type Script
 * 1. Inline object type - use when object type is used only once.
 * 2. Using Type alias - use when object structure is used in multiple places.
 * 3. Using Interface - use when object structure is used in multiple places esp. in classes.
 ***/
Object.defineProperty(exports, "__esModule", { value: true });
//Simple object type
let person = {
    name: "Happy",
    age: 40,
    isDeveloper: true
};
person.age = "Welcome"; // Inference. type is automatically determined when assigned a value.
//If assigned a different value, then it will show compile time error.
console.log(person);
//Inline object type
const person1 = {
    name: "Happy",
    age: "Welcome", //when assigning a string to a number type, it showing compile time error
    isDeveloper: true
};
console.log(person1);
let user = {
    name: "Happy",
    age: 40
};
console.log(user);
let user2 = {
    name: "Happiee",
    age: 25
};
console.log("interface", user2);
//# sourceMappingURL=objects.js.map