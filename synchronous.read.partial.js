// Import the fs (file system) module
const fs = require('fs');

// Open the file 'app.log' synchronously and get the file descriptor
const fd = fs.openSync('./data/app.log')

// Initialize a variable to hold the number of bytes read
let count = 0;

do {
    // Allocate a buffer of 200 bytes
    const buffer = Buffer.alloc(200);

    // Read data from the file into the buffer synchronously
    // The number of bytes read is assigned to 'count'
    count = fs.readSync(fd, buffer, 0, buffer.length, null);

    // Convert the buffer to a string and log it to the console
    console.log(buffer.toString());
}
// Continue reading and logging until no more data is read from the file
while (count > 0);