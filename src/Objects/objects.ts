/***
 *  Object types in Type Script
 * 1. Inline object type - use when object type is used only once.
 * 2. Using Type alias - use when object structure is used in multiple places.
 * 3. Using Interface - use when object structure is used in multiple places esp. in classes.
 ***/

//Simple object type
let person = {
    name: "Happy",
    age: 40,
    isDeveloper: true
}
person.age = "Welcome"; // Inference. type is automatically determined when assigned a value.
//If assigned a different value, then it will show compile time error.
console.log(person);

//Inline object type
const person1: {
    name: string;
    age: number;
    isDeveloper: boolean
} = {
    name: "Happy",
    age: "Welcome", //when assigning a string to a number type, it showing compile time error
    isDeveloper: true
}

console.log(person1);


//Using type alias
type Person = {
    name: string;
    age: number;
}
let user:Person = { //user object is created using the type Person
    name: "Happy",
    age: 40
}
console.log(user);

//Using interface
interface Person2 {
    name: string;
    age: number;
}

let user2: Person2 = {
    name: "Happiee",
    age: 25
}
console.log("interface", user2);