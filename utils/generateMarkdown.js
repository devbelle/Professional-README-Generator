// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

//For rendering the license below, I combined the top functiions together into one singular function.
function renderLicense(license) {
  //In the If statements, they will pull the license, badge, and link to the licenses.
  if(license === 'Apache 2.0') {
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === 'BSD 3') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license === 'GPL 3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if(license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === 'None') {
    return ` `
  }
}


// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}

//`;
//}
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  - ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#credits)
  - [Tests](#test)
  - [Questions](#questions)
  - [How to contribute](#contribution)
  
  ## License
  
  - ${renderLicense(data.license)}

  ## Installation
  
  To Install this application, please follow the steps below:
  - ${data.install}

  ## Usage

  ![alt text](screenshot.png)

  - ${data.usage}

  ## Features

  - ${data.features}

  ## Credits

  - ${data.credits}

  ## Tests

  - ${data.test}

  ## Questions

  - ${data.questions}

  Email: ${data.email}
  Github: [${data.github}](https://github.com/${data.github})

  ## How to Contribute

  - ${data.contribution}



`;
}

module.exports = generateMarkdown;


