function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "![License](https://img.shields.io/badge/License-MIT-blue)"
    case 'GPLv3':
      return "![License](https://img.shields.io/badge/License-GPLv3-blue)"
    case 'Apache':
      return "![License](https://img.shields.io/badge/License-Apache-blue)"
    case 'Apache':
      return "![License](https://img.shields.io/badge/License-Mozilla-blue[hyperlink]:"
    case 'None':
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://choosealicense.com/licenses/mit/"
    case 'GPLv3':
      return "https://choosealicense.com/licenses/gpl-3.0/"
    case 'Apache':
      return "https://www.apache.org/licenses/"
    case 'Apache':
      return "!https://www.mozilla.org/en-US/MPL/"
    case 'None':
      return "";
  }
}

function renderLicenseSection(license) {
switch (license) {
  case 'MIT':
    return "This application uses the MIT license.";
  case 'GPLv3':
    return "This application uses the GPLv2 license.";
  case 'Apache':
    return "This application uses the Apache license.";
  case 'Apache':
    return "This application uses the Mozilla license.";
  case 'None':
    return "This application does not use a license."; 
  }
} 

function generateMarkdown(data) {
  return `

  # ${data.title}
 
  ${renderLicenseBadge(data.license)}


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
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
 

  ## Credit
  ${data.contributor}


  ## Questions
  Please visit me at: https://github.com/${data.username}. 

  If you have any questions, feel free to reach me at: ${data.email}.


  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;