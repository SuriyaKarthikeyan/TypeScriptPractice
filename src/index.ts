console.log("hello world");

let age:number = 10;
if(age<50) {
    age+=10;
}

console.log(age);

let numbers = [1,2,'a'];

//Tuples
let user:[number,string] = [123, "Suriya"];
user.push("Karthik");
console.log(user);

let newUser: readonly [number,string] = [123, "Suriya"];
//newUser.push(true);

enum CardinalDirections {
    North=0,
    East="East",
    South=1,
    West="West"
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);
  currentDirection = CardinalDirections.South;
  console.log(currentDirection);

  function calculateTax(income: number, taxyear = 2022) : number {
    if((taxyear) < 2022)
    {
        return income * 1.2;
    }
    else{
      return income * 1.3;
    }
  }

  calculateTax(50_000);

  let employee : {
    name: string,
    age: number
  } = {
    name: "Suriya",
    age: 35
  }

  employee.designation = "Front End Dev";

  let users: [string, string, string] = ["Suriya", "Karthi", "Mohan"];
  users.push("Malathy");