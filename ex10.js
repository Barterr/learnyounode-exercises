var net = require('net');
var strftime = require('strftime');

var server = net.createServer((socket) => {
    var time = strftime('%F %R\n');
    socket.end(time);
})
server.listen(process.argv[2]);