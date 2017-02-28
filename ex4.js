var fs = require('fs');
var re = /[\n]/g;

var filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (error, contents) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(contents.match(re).length);
    return true;
});

