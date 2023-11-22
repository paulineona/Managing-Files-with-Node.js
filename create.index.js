// Import necessary functions from fs (file system) module
const { closeSync, openSync, readdirSync, watch, writeSync } = require('fs');

// Import the camelCase function from the 'camelcase' module
const camelCase = require('camelcase');

// Watch the './read' directory for changes
watch('./read', () => {
    // Open the file 'index.js' for writing and get the file descriptor
    const indexFd = openSync('./index.js', 'w');

    // Read the contents of the './read' directory
    const files = readdirSync('./read');

    // Map over the array of files
    files.map(f => {
        // Remove the "js" extension from the file name
        const name = f.replace("js", "");

        // Log a message indicating a file is being added
        console.log(`Adding a file: ${f}`);

        // Write a line to 'index.js' that exports the read function from the current file
        writeSync(indexFd,
            `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`);
    });

    // Close the 'index.js' file
    closeSync(indexFd);
});