// Global variable
let globalVar = "I'm a global variable";

function exampleFunction() {
    // Local variable
    let localVar = "I'm a local variable";
    
    console.log(globalVar); // Accessible: prints "I'm a global variable"
    console.log(localVar);   // Accessible: prints "I'm a local variable"
}

exampleFunction();

console.log(globalVar); // Accessible: prints "I'm a global variable"
// console.log(localVar); // Not accessible: ReferenceError
