/**
 * Recull de rutes que fa servir l'API
 */

var express = require("express");
var passController = require("../controllers/pass_controller");

var router = express.Router();

// Rutes
router.get("/", passController.base);
router.get("/contrasenya/:llargada?", passController.contrasenya);

module.exports = router;

/**
 *"use strict";

var express = require("express");
var articleController = require("../controllers/article");

var router = express.Router();

// Rutes de prova
router.post("/dades-curs", articleController.dadesCurs);
router.get("/test-controller", articleController.test);

// Rutes per articles
router.post("/save", articleController.save);
router.get("/articles/:last?", articleController.getArticles);
router.get("/article/:id", articleController.getArticle);
router.put("/article/:id", articleController.update);
router.delete("/article/:id", articleController.delete);

module.exports = router;
 */
