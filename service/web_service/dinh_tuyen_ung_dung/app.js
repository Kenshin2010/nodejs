var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    if (req.url === "/" || req.url === "/index.html") {
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    } else if (req.url === "/api") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            fistName: "Long",
            lastName: "Hung"
        }
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
}).listen(8080, "127.0.0.1")