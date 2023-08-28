// number, string, boolean, any, unknown, never, union, intersection,

// Numbers
let num: number = 10;
let age: number = 25;

let apples: number = 3;
let oranges: number = 5;

let totalFruits: number = apples + oranges;
console.log("Total fruits ==> ", totalFruits);

//string
let first_name: string = "pratik";
let last_name: String = "hole";

let full_name: string = first_name + last_name;
console.log("Full name ==> ", full_name);

// boolean
let isLoggedIn: boolean = true;
let isRaining: boolean = false;

console.log(isLoggedIn ? "Admin already logged in" : "Admin is not logged in");
console.log(isRaining ? "Raining" : "Not raining");

// Any
let dynamicData: any = 42;
console.log("dynaimc data : ", dynamicData);

dynamicData = "Hello, Typescript!";
console.log("dynaimc data : ", dynamicData);

dynamicData = true;
console.log("dynaimc data : ", dynamicData);
