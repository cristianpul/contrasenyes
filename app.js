var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var pass_rutes = require("./routes/pass_rutes");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "/web")));
app.use("/api", pass_rutes);

module.exports = app;
