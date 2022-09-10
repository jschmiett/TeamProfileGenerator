const inquirer = require('inquirer');
const fs = require('fs');

console.log("hello employee.js");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log("Hello function getName")
        // Use inquirer to get name
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                }
            ])

        // TODO: Store name
    }

    getId() {
        console.log("Hello function getId")
        // Use inquirer to get employee Id
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'employeeID',
                    message: 'What is your Employee ID?'
                }
            ])
        // TODO: store generated id
    }

    getEmail() {
        console.log("Hello function getEmail")
        // Use inquirer to get email
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email?',
                    message: 'What is your email address'
                }
            ])
        // TODO: Store email
    }

    getRole() {
        // TODO: returns 'Employee'
        console.log("Hello function getRole")
    }

}

module.exports = Employee;