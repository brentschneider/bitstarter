var express = require('express');
var sys = require("sys"), fs = require("fs");

var app = express.createServer(express.logger());

var buffer = new Buffer(16);
buffer = fs.readFileSync("index.html");

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});