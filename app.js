"use strict";

// Carregar mòduls de Node.js
var express = require("express");
var bodyParser = require("body-parser");

// Executar Express (http)
var app = express();

// Carregar fitxer de rutes
var pass_rutes = require("./routes/pass_rutes");

// Carregar middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Afegir prefixes a rutes i carregar rutes
app.use("/api", pass_rutes);

// Activar el CORS

// Exportar mòdul (arxiu actual)
module.exports = app;
