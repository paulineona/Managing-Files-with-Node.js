// Import the convertCsv function from csv.parse module
const { convertCsv } = require('../csv.parse');

// Import the readFile function from fs (file system) module
const { readFile } = require('fs');

// Import the chalk module for console text styling
const chalk = require('chalk');


module.exports.read = () => {
// Read the file 'pulitzer-circulation-data.csv' with utf8 encoding
readFile('./data/pulitzer-circulation-data.csv', 'utf8', (err, data) => {
    // If there is an error reading the file, log the error and return
    if (err) {
        console.error(`There is an error with the file: ${chalk.red(err)}`);
        return;
    }
    // If there is no error, convert the CSV data to a table and log it
    console.table(convertCsv(data));
});

}