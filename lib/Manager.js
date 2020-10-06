const Employee = require("../lib/Employee.js");

class Manager extends Employee{
    constructor (name, id, email, role, officeNumber) {
        super(name, id, email, role)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports =  Manager