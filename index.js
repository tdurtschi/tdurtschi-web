var port = 9000
var express = require("express")

var app = express()
app.use("/", express.static("./out"))
console.log("Listening on port ", port);
app.listen(port)
