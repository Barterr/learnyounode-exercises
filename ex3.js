var fs = require('fs');

var filePath = process.argv[2];
var contents = fs.readFileSync(filePath).toString();
var re = /[\n]/g;

console.log(contents.match(re).length);