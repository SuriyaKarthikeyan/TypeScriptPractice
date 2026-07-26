const age:number = 10;

age = "values";

console.log(age);

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