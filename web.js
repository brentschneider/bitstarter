// Define routes for simple SSJS web app. 

var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.logger());

// Set up  Env

app.get('/', function(request, response) {
 var data =fs.readFileSync('index.html' ,'utf8');
 response.send(data.toString());  
 
});

// set PORT
var port = process.env.PORT ||8080;

// Lets Do it
app.listen(port, function() {
 console.log("Listening on " + port);
});
