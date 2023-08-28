//Array

//Defining an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log("Numbers ==> ", numbers);

//Defining an array of strings
let colors: string[] = ["red", "green", "blue"];
console.log("Colors ==> ", colors);

//Array can also hold mixed data types (not recommended)
let mixedArray: (string | number)[] = [1, 2, 3, "Red", "Blue"];
console.log("MIxed array ==> ", mixedArray);

//Operations on arrays
let fruits: string[] = ["apples", "banana", "cherry"];

fruits.push("orange"); //Add an element at the end

fruits.pop(); //Remove the last element

fruits[1] = "grapes"; //Update an element at index 1

//Tuples
//Defining a tuple
let person: [string, number] = ["John", 35];

//Accessing tuple elements
let names: string = person[0];
let age: number = person[1];

console.log("Name ==> ", names);
console.log("Age ==> ", age);

// Array of tuples
let studentScore: [string, number][] = [
  ["john", 20],
  ["kohli", 30],
];

//Accessing elements in an array of tuples
let secondStudentScore: [string, number] = studentScore[1];
console.log("secondStudentScore ==> ", secondStudentScore);

let bobScore: number = studentScore[1][1];
console.log("bobScore ==> ", bobScore);

//Iterating through arrays
let numbersList: number[] = [1, 2, 3, 4, 5, 6];

//Using for...of loop
for (let num of numbersList) {
  console.log("for...of ==> ", num);
}

//Using forEach loop
numbers.forEach((num) => {
  console.log("forEach ==> ", num);
});
