// Render the license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }

}

// Render the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }

}

// Render the license section of README
function renderLicenseSection(license) {

  if (license !== 'no license') {
  return `
  
  ## [License](#table-of-contents)
  The application has the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }

 }

// Render contributer section
function renderContribution (contributors, data) {
  if (!contributors) {
    return `
  Thank you for your interest in this project. However, contributions will not be accepted
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// Generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Use](#use)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#contact)
  
  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Use](#table-of-contents)
  ${data.use}
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  ${renderContribution(data.contributor, data.contribute)}
  
  ## [Tests](#table-of-contents)
  ${data.test}
  
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})
`;

}

module.exports = generateMarkdown;
