// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

// TCreate an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title',
    },
    {
        message: 'What problem does this application solve?',
        name: 'solves',
    },
    {
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        message: 'What technologies are used?',
        name: 'technologies',
    },
    {
        message: 'What are the steps required to install your project?',
        name: 'instructions',
    },

    {
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
     {
        message: 'Choose a license:',
        name: 'license',
        type: 'list',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        message: 'What are the guidelines for contributing to the project?',
        name: 'guidelines',
    },
    {
        message: 'Provide instructions on how to run tests for the application.',
        name: 'tests',
    },
    {
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        message: 'What is your email address?',
        name: 'email',
    },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
      err ? console.log('An error occurred while creating your README file.') : console.log('Your README file was successfully created.')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((data) => {
          console.log('data for readme', data);
        const readme = md.generateMarkdown(data);
        writeToFile('README', readme);
    });
    
}

// Function call to initialize app
init();
