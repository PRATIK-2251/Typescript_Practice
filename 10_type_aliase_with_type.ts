// Type Alias for Simple Types:
type Age = number; // Creating a type alias 'Age' for the type 'number'

const myAge: Age = 25; // Using the type alias to declare a variable

// Type Alias for Union Types:
type Status = "active" | "inactive"; // Type alias for a union type

function setStatus(status: Status) {
  // Function parameter 'status' can only be "active" or "inactive"
}

setStatus("active");
// setStatus("dd"); // Argument of type '"act"' is not assignable to parameter of type 'Status'

// Type Alias for Object Structures:
type Point = {
  x: number;
  y: number;
};

const origins: Point = { x: 0, y: 0 }; // Using the type alias for an object structure

// Type Alias for Function Signatures:
type MathOperation = (x: number, y: number) => number; // Type alias for a function signature

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add);
console.log(subtract);

// Type Alias for Generics:
type Container<T> = { value: T }; // Type alias with a generic parameter
const numContainer: Container<number> = { value: 42 };
const strContainer: Container<string> = { value: "hello" };
