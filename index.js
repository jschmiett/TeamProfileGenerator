const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

console.log("hello, world");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'managersName',
            message: 'What is the name of your manager?'
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Employee ID?'
        },
        {
            type: 'input',
            name: 'email?',
            message: 'What is your email address'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?'
        },
        {
            type: 'list',
            name: 'optionsMenu',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building my Team']
        }
    ])
    // .then((data) => {

    // });


