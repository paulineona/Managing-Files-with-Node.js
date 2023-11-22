// Import the fs (file system) module
const fs = require("fs");

// Log a message indicating the start of file opening
console.log('Opening files...');

// Loop 50000 times
for (let i = 0; i < 50000; i++) {
  // Open the file 'app.log' synchronously and get the file descriptor
  const fd = fs.openSync("./data/app.log");

  // Log the file descriptor
  console.log(fd);

  // Close the file asynchronously
  fs.close(fd, () => { });
}