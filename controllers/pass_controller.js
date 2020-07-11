/**
 * Controlador amb els retorns que es realizarà en cridar una ruta
 */

const validator = require("validator");
const contrasenyes = require("../classes/contrasenyes");
const LLARGADA_PER_DEFECTE = "10";
const PARAMETRES_PER_DEFECTE = "tots";

// Creació d'instància de contrasenyes
var contrasenya = new contrasenyes();

// Controlador
var controller = {
  base: (req, res) => {
    res.send("API funcionant correctament.");
  },
  contrasenya: (req, res) => {
    // Si els parametres són undefined prendran el valor *_PER_DEFECTE
    var llargada = req.params.llargada || LLARGADA_PER_DEFECTE;
    var parametresEnCru = req.params.parametres || PARAMETRES_PER_DEFECTE;
    var parametresEnviats = parametresEnCru.split(";", 5);
    var parametresCorrectes = false;

    // Comprovem que, com a mínim, hi hagi un paràmetre correcte
    for (var element in parametresEnviats) {
      if (
        parametresEnviats[element] == "tots" ||
        parametresEnviats[element] == "minuscules" ||
        parametresEnviats[element] == "majuscules" ||
        parametresEnviats[element] == "numeros" ||
        parametresEnviats[element] == "caractersEspecials" ||
        parametresEnviats[element] == "evitaSimilars"
      ) {
        parametresCorrectes = true;
      } else {
        parametresEnviats[element] += " <= INCORRECTE !!!";
      }
    }

    // Si NO hi ha cap paràmetre correcte retornem un error
    if (parametresCorrectes) {
      parametres = parametresEnviats;
    } else {
      return res.status(400).send({
        status: "error",
        missatge: "Els paràmetres introduïts NO són correctes",
      });
    }
    // Si la llargada no és un número o aquest no es troba entre 1 i 2048
    // es retornarà un missatge d'error
    if (
      !validator.isNumeric(llargada, { no_symbols: true }) ||
      llargada < 1 ||
      llargada > 2048
    ) {
      return res.status(400).send({
        status: "error",
        missatge:
          "La llargada introduïda NO és correcta. Cal que sigui un valor numèric sencer entre 1 i 2048",
      });
    }

    // Si la llargada és numèrica es retornarà la contrasenya
    return res.status(200).send({
      status: "success",
      llargada: llargada,
      parametres: parametres,
      contrasenya: contrasenya.getContrasenya(llargada, parametres),
    });
  },
};

module.exports = controller;
