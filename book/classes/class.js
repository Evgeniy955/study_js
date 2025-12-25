class Person2 {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        if (firstname.startsWith("M")) {
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

let p2 = new Person2("kay", "Moon");
console.log(p2.firstname);
p2.firstname = "May";
console.log(p2.firstname);
p2.lastname = "Mars";
console.log(p2.lastname);

let p3 = new Person2("Maria", "Saga");
console.log(p3.firstname);
