//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//Below is the array of questions for the inquirer prompt. Each name is designated with a section of a README file. 
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is the title of this project?',
            name: 'title'

        },
        {
            type: 'input',
            message: 'Please give a description of this project. Why was this built and what problem did this solve? What did you learn?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Detail Installation steps.',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What is this application used for?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What commands should be used to test this project?',
            name: 'test'

        },
        {
            type: 'input',
            message: 'Please detail the features of this project',
            name: 'features'

        },
        {
            type: 'list',
            message: 'Choose a license for the application.',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'Who contributed to this project and what were their contributions?',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'How can a user reach out to you?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'How can the user contribute to your project?',
            name: 'contribution'
        }
    //Below is the functions that creates the README file. 
    ]).then((data) => {
        console.log(data);
        //File system will write the file as README.md and fill in the ${} entries from the above prompt questions.
        fs.writeFile('README.md', generateMarkdown(data),
        //If an error occurs the the message, please input all the data, will appear
        error =>{
            if(error) {
                console.log('Please input all the data')
            }
            //else if successful, the below strinf will appear in the console log
            console.log('README generated')
        })
    })
