// Import the writeFile function from fs (file system) module
const { constants, writeFile } = require('fs');

// Write a string to the file 'app.log' asynchronously
writeFile('./data/newapp.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test2" 405 21512', {
    flag: 'wx'//exclusive write - will fail if file already exists
    // mode: constants.S_IWUSR | constants.S_IRUSR // exclusive write and read permissions for the user
}, (err) => {
    // If there is an error writing to the file, log the error message
    if (err) {
        console.log(err);
    }
    // If there is no error, log a message indicating the file has been saved
    console.log('file saved');
});


// This code will overwrite the app.log file with the string provided.