// Base class
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        console.log(`${this.name} the ${this.type} makes a sound.`);
    }
}

// Subclass
class Dog extends Animal {
    constructor(name) {
        super(name, 'dog'); // Call the constructor of the parent class
    }

    bark() {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}

// Example usage
const myDog = new Dog("Buddy");
myDog.speak(); // Output: Buddy the dog makes a sound.
myDog.bark();  // Output: Buddy says: Woof! Woof!
