// Import the convertCsv function from csv.parse module
const { convertCsv } = require('./csv.parse');

// Import the fs (file system) module
const fs = require('fs');

// Import the promisify function from util module
const { promisify } = require('util');

// Convert fs.readFile into a promise-based function
const readFile = promisify(fs.readFile);

// Read the file 'pulitzer-circulation-data.csv' with utf8 encoding
// Then convert the CSV data to a table and log it to the console
// If there is an error reading the file, log the error message
readFile('./data/pulitzer-circulation-data.csv', 'utf8')
    .then(data => console.table(convertCsv(data)))
    .catch(err => console.error(`There is an error with the file: ${chalk.red(err)}`));

// Define an async function to read the file
const read = async () => {
    // Await the readFile promise to resolve, then convert the CSV data to a table and log it to the console
    const data = await readFile('./data/pulitzer-circulation-data.csv', 'utf8');
    console.table(convertCsv(data));
}

// Call the async function
read();