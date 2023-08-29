let age: number; //Declaring a variable 'age' with a type annotation of 'number'
age = 25; // Valid assignment of a number

// Type Annotations for Functions:
// Function Parameter and Return Type Annotations:
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 10); // result will be inferred as a number

// Function Parameter with Union Types:
function display(input: string | number): void {
  console.log(input);
}

display("Hello"); // Valid call with a string
display(42); // Valid call with a number
