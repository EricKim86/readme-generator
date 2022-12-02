
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
// ${renderLicenseBadge(data.license)}


function generateMarkdown(data) {
  return `

  # ${data.title}
 
  ![License](https://img.shields.io/badge/License-${data.license}-blue)
  
  ## Description
  ${data.description}


  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credit](#credit)
  - [Questions](#questions)
  - [Tests](#tests)


  ## Installation
  ${data.install}


  ## Usage
  ${data.usage}


  ## License
  ${data.license}
 

  ## Credit
  ${data.contributor}


  ## Questions / How to Contribute
  Please visit me at: https://github.com/${data.username}. 

  If you have any questions, feel free to reach me at: ${data.email}.


  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;
