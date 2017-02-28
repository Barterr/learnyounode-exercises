var map = require('through2-map')
var http = require('http');

var server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end('Method needs to be POST\n')
    }

    request.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase();
    })).pipe(response)
})
server.listen(Number(process.argv[2]));