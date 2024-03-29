// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "(no license)") {
        return "";
    } else {
        license = license.split(" ").join("_");
        return `![Static Badge](https://img.shields.io/badge/license-${license}-green)`;
    }
}

// DONE: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseURL = "https://choosealicense.com/licenses/"

    switch (license) {
        case "Apache License 2.0":
            licenseURL = licenseURL + "apache-2.0/";
            break;
        case "GNU GPLv2":
            licenseURL = licenseURL + "gpl-2.0/";
            break;
        case "GNU GPLv3":
            licenseURL = licenseURL + "gpl-3.0/";
            break;
        case "ISC License":
            licenseURL = licenseURL + "isc/";
            break;
        case "MIT License":
            licenseURL = licenseURL + "mit/";
            break;
        case "Unlicense":
            licenseURL = licenseURL + "unlicense/";
            break;
        default:
            return "";
    }

    return licenseURL;
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "(no license)") {
        return "";
    } else {
        return `This project is covered under the ${license}. For more information about this license, visit ${renderLicenseLink(license)}.`;
    }
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${renderLicenseSection(data.license)}

## Questions

My GitHub is https://github.com/${data.username}. If you have any questions, reach out to me at ${data.email}.
`;
}

module.exports = generateMarkdown;
