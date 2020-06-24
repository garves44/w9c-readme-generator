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
 *   2.1 init()
 *
 * 3. Document Ready
 *********************************************************/
/* ===============[ 0. Dependancies ]=====================*/
const fs = require("fs");
const inquirer = require("inquirer");

/* ===============[ 1. Globals ]=========================*/

// array of questions for user
const questions = [
  {
    type: "input",
    name: "repositoryName",
    message: "Enter the name/title of application! (Required)",
    validate: (repoNameInput) => {
      if (repoNameInput) {
        return true;
      } else {
        console.log("Enter the name of app!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUser",
    message: "Enter your Github username! (Required)",
    validate: (githubUserInput) => {
      if (githubUserInput) {
        return true;
      } else {
        console.log("Enter your Github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your app! (Required)",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("Enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Enter some instructions for users to install your app! (Required)",
    validate: (instalInput) => {
      if (instalInput) {
        return true;
      } else {
        console.log("Enter some instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter some instructions for users to use your app! (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Enter some instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "license",
    message:
      'List license type for this application, for no license type "none"?(examples: GPL 3.0, MIT)(Required)',
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Enter none for no license!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmIssues",
    message: "Would you like people to report issues?",
    default: false,
  },
  {
    type: "input",
    name: "issues",
    message: "Provide a way for users to contact you!",
    when: ({ confirmIssues }) => confirmIssues,
  },
  {
    type: "input",
    name: "contributors",
    message: 'List other contributors, if no others type "none"?(Required)',
    validate: (contributorsInput) => {
      if (contributorsInput) {
        return true;
      } else {
        console.log("Enter none for no contributors!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "List the tests that have been preformed on this app!(Required)",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("List Tests Completed!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contact",
    message:
      "Enter an email address for users to contact you and ask questions!(Required)",
    validate: (contactInput) => {
      if (contactInput) {
        return true;
      } else {
        console.log("Contact info added!");
        return false;
      }
    },
  },
];

/* ===============[ 2. Functions () ]======================*/
/**
 * 2.1 init()
 */
function init() {
  inquirer.prompt(questions).then((res) => {
    fs.appendFileSync(
      "./dist/README.md",
      `# ${res.repositoryName}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Repository Name added!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## Table of Contents:\n[1. Installation](#Installation)\n[2. App Usage](#App-Usage)\n[3. License](#License)\n[4. List of Contributors](#List-of-Contributors)\n[5. Tests](#Tests)\n[6. Questions](#Questions)\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Description added!",
        });
      }
    );
    fs.appendFileSync("./dist/README.md", `${res.description}\n`, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Description added!",
      });
    });
    fs.appendFileSync(
      "./dist/README.md",
      `## Installation:\n${res.installation}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Install instructions added!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## App Usage:\n${res.usage}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "User instructions added!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## License:\n${res.license}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "License added!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## List of Contributors:\n${res.contributors}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Contributor list added!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## Tests:\n${res.tests}\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Tests Listed!",
        });
      }
    );
    fs.appendFileSync(
      "./dist/README.md",
      `## Questions:\n Here is a link to my github: https://github.com/${res.githubUser}\n Email me at:${res.contact}\n for additional questions\n`,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Contact info added!",
        });
      }
    );
  });
}

/* ===============[ 3. Document Ready ]======================*/
// function call to initialize program
init();
