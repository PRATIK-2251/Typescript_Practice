// 5 - Functions : Parameters, Return Types.

//Using parameters
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(10, 20);
console.log("AddNUmbers ==> ", result);

// Using return types
function greet(name: string): string {
  return `Hello ${name}`;
}

console.log("greet() ==> ", greet("Vaibhav"));

//If the function doesn't return any value, you can use the void type:
function logMessage(message: string): void {
  console.log("Message : ", message);
}

logMessage("Here, we use void data type");

// Optional Parameters(?)
function sendMessage(content: string, recipient?: string): void {
  console.log(recipient ? `${content} ==> ${recipient}` : `${content}`);
}
sendMessage("This is content-1");
sendMessage("This is content-2", "Kiran");

// default parameters
function greetPerson(name: string = "Guest"): string {
  return `Hello ${name}`;
}
console.log(greetPerson());
console.log(greetPerson("Pratik"));

//function overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log("combine number ", combine(10, 10));
console.log("combine string ", combine("kiran", "kandekar"));
