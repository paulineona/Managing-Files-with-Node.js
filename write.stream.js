// Import the createReadStream and createWriteStream functions from fs (file system) module
const { createReadStream, createWriteStream } = require('fs');

// Create a readable stream from the file 'app.log' with a highWaterMark of 95 and encoding of 'utf-8'
const stream = createReadStream('./data/app.log', { highWaterMark: 95, encoding: 'utf-8' });

// Create a writable stream to the file 'output.log'
const writer = createWriteStream('./data/output.log');

// Initialize a variable to keep track of the number of data events
let iteration = 0;

// Listen for the 'data' event on the readable stream
stream.on('data', data => {
    // Pause the stream
    stream.pause();

    // Increment the iteration count and log it to the console
    console.log(++iteration);

    // Write the data to the writable stream
    writer.write(data);

    // Resume the stream after a delay of 1000 milliseconds
    setTimeout(() => {
        stream.resume();
    }, 1000);
});