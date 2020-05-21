var port = 9000
var express = require("express")

var app = express()
app.use("/", express.static("./bin"))
app.listen(port)
