const { convertCsv } = require('./csv.parse');
const { open, read } = require('fs');

open('.data/pulitzer-circulation-data.csv', (err, fd) => {
});