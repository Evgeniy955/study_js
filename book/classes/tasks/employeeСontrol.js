let employee = [{
    firstname: "John", lastname: "Doe", workYears: 5
}, {
    firstname: "Jane", lastname: "Smith", workYears: 3
}, {
    firstname: "Emily", lastname: "Johnson", workYears: 8
}]

class Employee {
    constructor(firstname, lastname, workYears) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.workYears = workYears;
    }

    getCountEmployees(arr) {
        return arr.length;
    }
}

Employee.prototype.getInfoOfEmployee = function () {
    return `Employee: ${this.firstname} ${this.lastname}, Work Years: ${this.workYears}`;
}

let empInstances = employee.map(emp => new Employee(emp.firstname, emp.lastname, emp.workYears));

empInstances.forEach(emp => {
    console.log(emp.getInfoOfEmployee());
});

let emp = new Employee();
console.log("Total Employees:", emp.getCountEmployees(employee));
