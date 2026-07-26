//Type Annotation - assigning a variable a type associated with it.
// If we change the datatype then it will show compile time error.
const age:number = 10;
age = "values";
console.log(age);

//function with parameter types and return type
function getText(name: string): string {
    return name;
} 
getText("suriya");

//diff between var, let and const
function varExample() {
    var a = 10;
    var a = 20;
    console.log(a); // var can be both redclared and reassigned
}

function letExample() {
    let x = 10;
    let x = 20;
    x = 30;
    console.log(x); //let cannnot be redeclared. but can be reassigned.
}

function constExample() {
    const z = 10;
    const z = 20;
    z = 30;
    console.log(z); //const cannot be redeclared as well as reassigned.
}

var x = 40; //out of the scope, all variables can be redeclared.
let y = 40;
const z = 40;
console.log(x, y, z);

varExample();
letExample();
constExample();

//Type inference: Automatically determines the type of a variable/function based on the assigned value[without the need for type annotation]
let a = "welcome";

a=123;//shows compile error when assigning number type here.

console.log(a);