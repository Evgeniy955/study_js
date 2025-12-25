// Simple example: Person with getter and setter for fullName
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [first, last] = name.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
}

// Usage
const p = new Person('John', 'Doe');
console.log(p.fullName); // John Doe
p.fullName = 'Jane Smith';
console.log(p.firstName); // Jane
console.log(p.lastName);  // Smith
