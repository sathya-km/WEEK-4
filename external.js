
console.log("External JavaScript loaded.");
if (true) {
    let z = 20;
    console.log(z); 
}

console.log(x); 
var x = 5;
console.log(x); 

function example() {
    var y = 10;
    console.log(y); 
}
example();

const a = 30;
console.log(a); // 30


const obj = { key: 'value' };
obj.key = 'new value'; 
console.log(obj.key); 



// Array (which is also an object)
let arr = [1, 2, 3];
console.log(typeof arr); // "object" (arrays are a special type of object)




function ageCategorizer(age) {
    if (age < 0) {
        console.log("Invalid age. Please enter a positive number.");
    } else if (age <= 12) {
        console.log("You are a child.");
    } else if (age <= 19) {
        console.log("You are a teen.");
    } else if (age <= 64) {
        console.log("You are an adult.");
    } else {
        console.log("You are a senior.");
    }
}

// Example usage
let personAge = parseInt(prompt("Enter your age:"));
ageCategorizer(personAge);
