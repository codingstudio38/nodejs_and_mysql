const http = require("http");


function data(req, res) {
    res.write("<h1>hello, everyone</h1>");
    res.end();
}

http.createServer(data).listen(4500);