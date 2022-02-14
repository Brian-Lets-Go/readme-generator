// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questionArray = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe you project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'use',
        message: 'Please provide instructions to use your project',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter your use instructions');
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },

    {
        type: 'confirm',
        name: 'contributers',
        message: 'Would you like to allow contributors?',
        default: true
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide contribution guidelines',
        when: ({ contribute }) => {
            if (contribute) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your test instructions');
                return false;
            }
        }
    }

];

// Function to write README file
const writeToFile = markdownData => {

    return new Promise((resolve, reject) => {

        fs.writeFile('./generated-README.md', markdownData, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README File Createed'
            });
        });
    });
}

// Function to initialize app
const init = () => {

    return inquirer.prompt(questionArray)
    .then(answers => {
        return answers;
    })

}

// Function call to initialize app
init().then(answers => {

    console.log(answers);
    generateMarkdown(answers);

}).then(markdownData => {

    writeToFile(markdownData);

}).then(writeFileResponse => {

    console.log(writeFileResponse.message);

})

.catch(err => {

    console.log(err);

})