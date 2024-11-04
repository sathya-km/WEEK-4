const person = {
    name: "sathya",
    age: 26,
    city: "chennai",
    
    introduce: function() {
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
    }
};


person.introduce();
