var port = 8080;
var express = require("express");

var app = express();
app.use('/', express.static('c:\\users\\tdurf\\workspace\\personalSite\\bin'));
app.listen(port);