var http = require('http');
var bl = require('bl')
var results = ["","",""];

function getURL(url, num) {
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            results[num] = data.toString();
            if (results[0] && results[1] && results[2]) {
                console.log(results[0]);
                console.log(results[1]);
                console.log(results[2]);
            }
        }));
        response.on("error", (error) => {
            console.error(error);
        });
    }).on('error', console.error)
}

getURL(process.argv[2], 0);
getURL(process.argv[3], 1);
getURL(process.argv[4], 2);