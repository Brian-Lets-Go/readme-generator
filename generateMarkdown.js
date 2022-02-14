// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  
  ${renderLicenseBadge()}
  
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
  
  ## [License](#table-of-contents)
  ${renderLicenseSection()}

  ## [Contributing](#table-of-contents)
  ${renderContributors(data.contributers, data.contribute)}
  
  ## [Tests](#table-of-contents)
  ${data.test}
  
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})
`;

}

module.exports = generateMarkdown;
