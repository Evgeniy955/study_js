class Person {
    constructor (name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info_of_person() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Happiness: ${this.happiness}`);
    }
}

let alex = new Person('Alex', 25, true);
let bob = new Person('Bob', 30, false);
console.log(alex.age);
console.log(alex.name);


alex.info_of_person();
