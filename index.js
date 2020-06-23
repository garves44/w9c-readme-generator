/*********************************************************
 * Readme Generator
 * @package w9c-readme-generator
 * @author Jeremy C Collins
 * @version development
 * @license none (public domain)
 * ===============[ TABLE OF CONTENTS ]===================
 * 0. Dependancies
 * 1. Globals
 * 2. Functions ()
 *   2.1 writeToFile()
 *   2.2 init()
 * 
 * 3. Document Ready
 *********************************************************/
/* ===============[ 0. Dependancies ]=====================*/
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const readmeTemp = requrie("./src/readme-template");
const inquirer = require("inquirer");


/* ===============[ 1. Globals ]=========================*/

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'repositoryName',
        message: 'Enter the name of application! (Required)',
        validate: (repoNameInput) => {
            if (repoNameInput) {
                return true;
            } else {
                console.log("Enter the name of app!");
                return false
            }
        },
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your Github username! (Required)',
        validate: (githubUserInput) => {
            if (githubUserInput) {
                return true;
            } else {
                console.log('Enter your Github username!');
                return false
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your app! (Required)',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Enter a description!');
                return false
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter some instructions for users to install your app! (Required)',
        validate: (instalInput) => {
            if (instalInput) {
                return true;
            } else {
                console.log('Enter some instructions!');
                return false
            }
        },
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Enter some instructions for users to use your app! (Required)',
        validate: (useageInput) => {
            if (useageInput) {
                return true;
            } else {
                console.log('Enter some instructions!');
                return false
            }
        },
    },
    {
        type: 'input',
        name: 'license',
        message: 'List license type for this application, for no license type "none"?(Required)',
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Enter none for no license!');
                return false
            }
        },
    },
    {
        type: 'confirm',
        name: 'userContribute',
        message: 'Do you want to allow users to report issues and contribute to your app?(Required)',
        default: false
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List other contributors, if no others type "none"?(Required)',
        validate: (contributorsInput) => {
            if (contributorsInput) {
                return true;
            } else {
                console.log('Enter none for no contributors!');
                return false
            }
        },
    },

];


/* ===============[ 2. Functions () ]======================*/
/**
 * 2.1 writeToFile()
 */

// function to write README file
function writeToFile(fileName, data) {
};
/**
 * 2.2 init()
 */
// function to initialize program
function init() {

};


/* ===============[ 3. Document Ready ]======================*/

// function call to initialize program
init();
