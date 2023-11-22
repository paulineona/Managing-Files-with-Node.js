// Import the convertCsv function from csv.parse module
const { convertCsv } = require('./csv.parse');

// Import the readFileSync function from fs (file system) module
const { readFileSync } = require('fs');

// Import the chalk module for console text styling
const chalk = require('chalk');

// Import the log function from console module
const { log } = require('console');

module.exports.read = () => {

    try {
        // Try to read the file 'pulitzer-circulation-data.csv' synchronously with utf8 encoding
        const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8');

        // If the file is read successfully, convert the CSV data to a table and log it to the console
        console.table(convertCsv(data));
    } catch (err) {
        // If there is an error reading the file, log the error message
        console.log(`There is an error with the file: ${chalk.red(err)}`);
    }
}