const { default: inquirer } = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name, id, email)

        // TODO: Use inquirer to define officeNumber?
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // Use inquirer to get Office Number
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your Office Number?'
                }
            ])

        // TODO: Save Office Number

    }

    getRole() {
        // TODO: Override employee.js getRole method to return 'Manager'
        console.log("Hello employee.js getRole function");
    }
}

module.exports = Manager;