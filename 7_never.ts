// 1. unreachable code :
function throwError(message: string): never {
  throw new Error(message);
}

const result: never = throwError("An error occured"); //This line is unreachable

// 2. function never returning
function infiniteLoop(): never {
  while (true) {
    //code that doesn't break the loop
  }
}

// 3. type guards
