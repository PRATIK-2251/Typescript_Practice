// undefined type:
let variableWithoutValue: undefined;

console.log("variableWithoutValue ==> ", variableWithoutValue);

function findElement(arr: number[], target: number): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return undefined;
}

let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let targetValue: number = 10;
let targetValue: number = 1;

console.log("FindElement ==> ", findElement(numberList, targetValue));

// null type
let variableWithNull: null = null;
console.log("variableWithNull ==> ", variableWithNull);

function findPerson(name: string): { name: string; age: null } | null {
  //...some logic to find
  return null; //if person is not found
}

console.log("findPerson ==> ", findPerson("Kiran"));

// undefined and null as subtypes
// let num: number = undefined;
// let name: string = null;
