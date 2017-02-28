var fs = require('fs');
var http = require('http');

var server = http.createServer((request, response) => {
    var file = fs.createReadStream(process.argv[3]);
    file.pipe(response);
})
server.listen(Number(process.argv[2]));