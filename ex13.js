var http = require('http')
var url = require('url')

var server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        return res.end('Method needs to be GET\n')
    }
    
    var parsedURL = url.parse(req.url, true)
    var date = new Date(parsedURL.query.iso)
    var data
    
    if (parsedURL.pathname == "/api/parsetime") {
        data = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    }
    
    if (parsedURL.pathname == "/api/unixtime") {
        data = {
            "unixtime": date.getTime()
        }
    }
    
    if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))