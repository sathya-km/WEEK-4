const person = {
    name: "Bob",
    age: 25,
    city: "Los Angeles",

    printName: function() {
        console.log(`My name is ${this.name}.`);
    }
};

// Calling the method to print the name
person.printName();
