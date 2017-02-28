var fs = require('fs');

module.exports = function (path, ext, callback) {
    "use strict";
    var re = new RegExp(".*[.]"+ext, "g");
    var filteredList = [];
    fs.readdir(path, (error, list) => {
        if (error) {
            return callback(error);
        }
        for (let file of list) {
            if (file.match(re)) {
                filteredList.push(file);
            }
        }
        callback(null, filteredList);
    });
}