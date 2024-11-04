// Initial array
let fruits = ["Apple", "Banana", "Cherry"];

// 1. Adding elements
fruits.push("Mango"); // Adds "Mango" to the end of the array
fruits.unshift("Orange"); // Adds "Orange" to the beginning of the array
console.log("After adding elements:", fruits); // Output: ["Orange", "Apple", "Banana", "Cherry", "Mango"]

// 2. Removing elements
fruits.pop(); // Removes the last element ("Mango")
fruits.shift(); // Removes the first element ("Orange")
console.log("After removing elements:", fruits); // Output: ["Apple", "Banana", "Cherry"]

// 3. Updating elements
fruits[1] = "Blueberry"; // Updates the second element (index 1) from "Banana" to "Blueberry"
console.log("After updating an element:", fruits); // Output: ["Apple", "Blueberry", "Cherry"]
