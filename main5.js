
// Initial array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 1: Filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers); // Output: [1, 3, 5, 7, 9]

// Step 2: Use reduce to find the sum of the filtered array
const sumOfOddNumbers = oddNumbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of Odd Numbers:", sumOfOddNumbers); // Output: 25
