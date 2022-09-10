const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name, id, email)


        this.school = school;
    }

    getSchool() {
        // TODO: Use inquirer to get school information
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the name of the school you attend?'
                }
            ])
        // TODO: Save school information

    }

    getRole() {
        // Over rides employee.js getRole function to return 'Intern'
    }
}

module.exports = Intern;