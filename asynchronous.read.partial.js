// Import the convertCsv function from csv.parse module
const { convertCsv } = require('./csv.parse');

// Import the open and read functions from fs (file system) module
const { open, read } = require('fs');

// Open the file 'pulitzer-circulation-data.csv'
open('./data/pulitzer-circulation-data.csv', (err, fd) => {
    // If there is an error opening the file, log the error message and return
    if (err) {
        console.error(`Error opening file: ${err}`);
        return;
    }

    // Allocate a buffer of 200 bytes
    const buffer = Buffer.alloc(200);

    // Read the first 200 bytes of the file into the buffer
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        // If there is an error reading the file, log the error message and return
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }

        // Convert the buffer to a string, convert the CSV data to a table, and log it to the console
        console.table(convertCsv(buff.toString()));
    });
});