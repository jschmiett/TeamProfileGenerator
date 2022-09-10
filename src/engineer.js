const { default: inquirer } = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email)

        this.github = github;
    }

    getGithub() {
        // Uses inquirer to get GitHub information
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your Git Hub username?'
                }
            ])
        // TODO: Save GitHub information
    }

    getRole() {
        // TODO: Over rides employee.js getRole function to return 'Engineer'
    }
}

module.exports = Engineer;