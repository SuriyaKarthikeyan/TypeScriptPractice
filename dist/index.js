"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
let age = 10;
if (age < 50) {
    age += 10;
}
console.log(age);
let numbers = [1, 2, 'a'];
//Tuples
let user = [123, "Suriya"];
user.push("Karthik");
console.log(user);
let newUser = [123, "Suriya"];
//newUser.push(true);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections[CardinalDirections["South"] = 1] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
currentDirection = CardinalDirections.South;
console.log(currentDirection);
function calculateTax(income, taxyear = 2022) {
    if ((taxyear) < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTax(50_000);
let employee = {
    name: "Suriya",
    age: 35
};
employee.designation = "Front End Dev";
let users = ["Suriya", "Karthi", "Mohan"];
users.push("Malathy");
//# sourceMappingURL=index.js.map