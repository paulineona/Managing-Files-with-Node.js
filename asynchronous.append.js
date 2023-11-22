// Import the appendFile function from fs (file system) module
const { appendFile } = require('fs');

// Append a string to the file 'app.log' asynchronously
appendFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test1" 405 21512', (err) => {
    // If there is an error appending to the file, log the error message
    if (err) {
        console.log(err);
    }
    // If there is no error, log a message indicating the file has been saved
    console.log('file saved');
});