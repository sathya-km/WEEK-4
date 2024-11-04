function square(number) {
    return number * number;
}

const square = function(number) {
    return number * number;
};

const square = (number) => {
    return number * number;
};

// Alternatively, for a more concise version:
const square = number => number * number;

console.log(square(5)); // Output: 25
console.log(square(10)); // Output: 100

