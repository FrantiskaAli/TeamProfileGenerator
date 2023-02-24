const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { clear } = require("console");



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your manager\'s ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your manager\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your manager\'s office number?',
            name: 'email',
        },
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        module.export = manager
    promptForNext()
    });

// TODO: Write Code to gather information about the development team members, and render the HTML file.



//function for asking about next employee
const promptForNext = () => {
    inquirer.prompt([
            {   name: 'next',
                type: 'list',
                message: 'Choose what kind of employee would you like to pick',
                choices: [
                    {
                        name: 'Engineer',
                        value: 1,
                    },
                    {
                        name: 'Intern',
                        value: 2,
                    },
                    {
                        name: 'My team is now complete, thank you',
                        value: 3,
                    }
                ],
            },
        ])
        .then((answer) => {
            if (answer.next == 1) {
                promptEngineer()
            } else if (answer.next == 2) {
                promptIntern()
            } else {
               console.log('finished')
                
            }
        })
};


//function to get engeneer info
const promptEngineer = () => {
    inquirer.prompt([
            {
                type: 'input',
                message: 'What is your engineer\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your engineer\'s ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is your engineer\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your engineer\'s github name?',
                name: 'github',
            },
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            promptForNext();

        });
}

//prompt to get intern

const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your intern\'s name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your intern\'s ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is your intern\'s email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What school does your intern attend?',
                name: 'school',
            },
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            promptForNext();

        });
}