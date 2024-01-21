// DONE: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// DONE: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description for the project:",
        name: "description"
    },
    {
        type: "input",
        message: "Describe how to install the project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe how to use the project:",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide guidelines on how to contribute to the project:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter any instructions about how to test the project:",
        name: "tests"
    },
    {
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU GPLv2",
            "GNU GPLv3",
            "ISC License",
            "MIT License",
            "Unlicense"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions
        ).then(response => {
            let markDown = generateMarkdown(response);
            fs.writeFile("READEME.md", markDown, err => {
                err ? console.error(err) : console.log("Success!");
            })
        })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
