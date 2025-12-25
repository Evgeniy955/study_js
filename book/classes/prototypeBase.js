/**
 * Class representing a person.
 */
class Person {
    /**
     * Create a person.
     * @param {string} firstname - The first name of the person.
     * @param {string} lastname - The last name of the person.
     */
    constructor(firstname, lastname) {
        this.firstname = firstname; // The first name of the person.
        this.lastname = lastname;   // The last name of the person.
    }

    /**
     * Logs a generic greeting to the console.
     */
    greet() {
        console.log("Hi there!");
    }
}

/**
 * Introduces the person by logging their first name to the console.
 */
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

/**
 * A prototype property representing the person's favorite color.
 * @type {string}
 */
Person.prototype.favoriteColor = "green";

// Example usage:
let p = new Person("Maria", "Saga");
console.log(p.favoriteColor); // Logs the favorite color of the person.
p.introduce(); // Logs an introduction with the person's first name.
