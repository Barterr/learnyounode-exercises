var fs = require('fs');

var path = process.argv[2];
var ext = process.argv[3];
var re = new RegExp(".*[.]"+ext, "g");

fs.readdir(path, (error, list) => {
    "use strict";
    if (error) {
        return console.log(error);
    }
    for (let file of list) {
        if (file.match(re)) {
            console.log(file);
        }
    }
    // console.log(contents.match(re).length);
    return true;
});

