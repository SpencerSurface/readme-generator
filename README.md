# README Generator

## Description

This project is a command line tool that generates a README file based on user input. Having a quality README file is a must for quality software projects, and this tool aims to make creating such a file easier. Additionally, working on this project has allowed me to practice my Node.js skills. 

This project is written in JavaScript to be run in Node.js. It utilizes the package inquirer.js to handle user prompting and input, and the package fs.js to handle file I/O. The file `index.js` contains the main code for the project and `generateMarkdown.js` contains some helper code. The file `package.json` of course provides information for npm about the packages needed to run the project.

One thing I learned in the process of completing this project was the utility of JavaScript template literals for storing pre-formatted text. I hadn't used them much before, but they were hugely useful for generating the README files in this project.

## Installation

Install this project by cloning the repository from GitHub, then navigating to the project directory in your terminal and running `npm install`.

## Usage

To use this tool, navigate to the project's directory in your terminal and run the command `node index.js`. The tool will prompt you for information about the project you are making a README for. After responding to the prompts, a README file will be generated with a filename similar to `[your project title]_README.md`.

A sample of a README file generated with this tool is included in the file `README_sample.md`. Note that I manually changed its filename so it wouldn't be excluded from the repo by the gitignore.

A walkthrough of the functionality of the tool is provided in the following video: [Walkthrough video](./walkthrough.webm)

## Credits

All modifications to the code were my own. The starter code provided by edX Boot Camps LLC included the outline of `index.js`, the outline of `generateMarkdown.js`, the initial `package.json`, and the initial `.gitignore`. 

## License

No license at this time.
