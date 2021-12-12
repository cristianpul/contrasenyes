/**
 * Recull de rutes que fa servir l'API
 */

var express = require('express');
var passController = require('../controllers/pass_controller');

var enrutador = express.Router();

// Recull de rutes
enrutador.get('/', passController.base);
enrutador.get('/contrasenya/:llargada?', passController.contrasenya);
enrutador.get('/contrasenya/:llargada/p=:parametres?', passController.contrasenya);
enrutador.get('/log', passController.log);

// Exportació de l'enrutador
module.exports = enrutador;
