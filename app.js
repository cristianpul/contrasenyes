"use strict";

// Carregar mòduls de Node.js
var express = require("express");
//var bodyParser = require("body-parser");

// Executar Express (http)
var app = express();

// Carregar fitxer de rutes
//var article_routes = require("./routes/article");

// Carregar middlewares
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// Activar el CORS

// Afegir prefixes a rutes i carregar rutes
//app.use("/api", article_routes);

// Exportar mòdul (arxiu actual)
module.exports = app;
