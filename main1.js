// String
let str = "Hello, World!";
console.log(typeof str); // "string"

// Number
let num = 42;
console.log(typeof num); // "number"

// Boolean
let bool = true;
console.log(typeof bool); // "boolean"

// Null
let n = null;
console.log(typeof n); // "object" (this is a known quirk in JavaScript)

// Undefined
let u;
console.log(typeof u); // "undefined"

// Symbol
let sym = Symbol('description');
console.log(typeof sym); // "symbol"

// Object
let obj = { key: "value" };
console.log(typeof obj); // "object"

// Array (which is also an object)
let arr = [1, 2, 3];
console.log(typeof arr); // "object" (arrays are a special type of object)
