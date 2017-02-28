var http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on("data", (data) => {
        console.log(data);
    });
    response.on("error", (error) => {
        console.error(error);
    });
    response.on("end", (end) => {
        
    });
}).on('error', console.error)