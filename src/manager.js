const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getRole() {
        // TODO: Override employee.js getRole method to return 'Manager'
        console.log("Hello employee.js getRole function");
    }
}

module.exports = Manager;