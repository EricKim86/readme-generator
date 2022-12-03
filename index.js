const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the README?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Write a short description of your application?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'GPLv3', 'Apache', 'Mozilla', 'None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
            default: 'npm i'
        },
        {
            type: 'input',
            message: 'What is the intended usage of the application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who contributed to the development of this application?',
            name: 'contributor',
        },
        {
            type: 'input',
            message: 'How can a user test the application?',
            name: 'test',
            default: 'npm test'
        },
    ])
    .then((response) => {
        let readmeText = generateMarkdown(response);
        fs.writeFile('README.md', readmeText, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
