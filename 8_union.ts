// Union type
let myValue: number | string;
myValue = 12;
myValue = "Shambhu";

// 1. function parameters
function display(input: number | string): void {
  console.log(input);
}

// 2. Handling mixed data
let userData: number | string;
userData = 42;
userData = "Vishnu";

// 3. Handling optional or default values
let userName: string | undefined;
userName = "Alice";
userName = undefined;

// 4. Dynamic Data
function processInput(input: number | string) {
  if (typeof input === "number") {
    return input * 2;
  } else {
    return input.toUpperCase();
  }
}

console.log("processInput ==> ", processInput(20));
console.log("processInput ==> ", processInput("kiran"));
