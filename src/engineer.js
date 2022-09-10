const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email)

        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        // TODO: Over rides employee.js getRole function to return 'Engineer'
    }
}

module.exports = Engineer;