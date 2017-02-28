var fileFilter = require('./fileFilter.js');

var path = process.argv[2];
var ext = process.argv[3];

fileFilter(path, ext, function(err, list) {
    "use strict";
    if (err) {
        return console.error("Error:", err);
    }
    for (let file of list) {
        console.log(file)
    }
});