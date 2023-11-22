// Import the fs (file system) module
const fs = require('fs');

module.exports.read = () => {

    // Initialize a variable to hold the total size of the file
    let totalSize = 0;

    // Get the stats of the file 'app.log', specifically its size
    fs.stat("./data/app.log", (err, { size }) => totalSize = size);

    // Open the file 'app.log'
    fs.open("./data/app.log", (err, fd) => {
        // Allocate a buffer of 200 bytes
        const buffer = Buffer.alloc(200);

        // Loop over the file, reading chunks of data equal to the buffer length
        for (let i = 0; i < totalSize / buffer.length; i++) {
            // Read a chunk of data from the file into the buffer
            fs.read(fd, buffer, 0, buffer.length, i * buffer.length, (err, count, buff) => {
                // Convert the buffer to a string and log it to the console
                console.log(buff.toString());
            });
        }
    });
}