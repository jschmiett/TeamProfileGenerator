const Intern = require('./employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name, id, email)

        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        // Over rides employee.js getRole function to return 'Intern'
    }
}

module.exports = Intern;