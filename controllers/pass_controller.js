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

/**
"use strict";
var validator = require("validator");
var articleConst = require("../models/article");

var controller = {
  dadesCurs: (req, res) => {
    return res.status(200).send({
      curs: "Frameworks JS",
      url: "udemy.com",
      antiguitat: 2018,
    });
  },
  test: (req, res) => {
    return res.status(200).send({
      missatge: "Sóc l'acció test del controlador d'articles",
    });
  },

  // Mètodes
  save: (req, res) => {
    // Recollir paràmetres per POST
    var parametres = req.body;

    // Validar dades amb Validator
    try {
      var validar_titol = !validator.isEmpty(parametres.title);
      var validar_content = !validator.isEmpty(parametres.content);
    } catch (error) {
      return res.status(200).send({
        status: "error",
        missatge: "Error d'enviament de dades! :(",
      });
    }

    if (validar_content && validar_titol) {
      // Crear l'objecte article a desar
      var article = new articleConst();

      // Assignar valors a l'objecte article
      article.title = parametres.title;
      article.content = parametres.content;
      article.image = null;

      // Desar l'objecte article
      article.save((error, articleStored) => {
        if (error || !articleStored) {
          return res.status(404).send({
            status: "error",
            missatge: "L'article no s'ha guardat!!! :(",
          });
        }

        // Retornar resposta
        return res.status(200).send({
          status: "success",
          article: articleStored,
        });
      });
    } else {
      return res.status(200).send({
        status: "error",
        missatge: "Dades incorrectes o falten dades per enviar... :(",
      });
    }
  },
  getArticles: (req, res) => {
    var query = articleConst.find();

    var last = req.params.last;
    if (last || last != undefined) {
      query.limit(5);
    }

    // Find
    query.sort("-_id").exec((error, articles) => {
      if (error || !articles) {
        return res.status(500).send({
          status: "error",
          missatge: "Error al retonar articles :/",
        });
      }

      return res.status(200).send({
        status: "success",
        articles,
      });
    });
  },

  getArticle: (req, res) => {
    // Recollir id
    var idArticle = req.params.id;

    // Comprovar que exiteix
    if (!idArticle || idArticle == undefined) {
      return res.status(404).send({
        status: "error",
        missatge: "No s'ha enviat l'id correctament :/",
      });
    }

    // Cercar l'article
    articleConst.findById(idArticle, (error, article) => {
      if (error || !article) {
        return res.status(404).send({
          status: "error",
          missatge: "Error al retornar les dades de l'article :/",
        });
      }

      return res.status(200).send({
        status: "success",
        article,
      });
    });
  },

  update: (req, res) => {
    // Recollir id d'article
    var articleId = req.params.id;

    // Recollir dades que arriben per put
    var params = req.body;

    // Validar dades
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (error) {
      return res.status(404).send({
        status: "error",
        missatge: "Falten dades de l'article per enviar :/",
      });
    }

    // Realitzar la consulta
    if (validate_title && validate_content) {
      articleConst.findByIdAndUpdate(
        { _id: articleId },
        params,
        { new: true },
        (error, articleUpdated) => {
          if (error) {
            return res.status(404).send({
              status: "error",
              missatge: "No s'ha pogut actualitzar l'article :/",
            });
          }

          if (!articleUpdated) {
            return res.status(404).send({
              status: "error",
              missatge: "No s'ha pogut actualitzar l'article :/",
            });
          }
          // Resposta
          return res.status(200).send({
            status: "success",
            article: articleUpdated,
          });
        }
      );
    } else {
      return res.status(404).send({
        status: "error",
        missatge: "No s'ha pogut actualitzar l'article :/",
      });
    }
  },

  delete: (req, res) => {
    // Recollit l'article de la URL
    var articleId = req.params.id;

    // Fer un Find and Delete
    articleConst.findOneAndDelete(
      { _id: articleId },
      (error, articleDeleted) => {
        if(error) {
          return res.status(500).send({
            status: "error",
            missatge: "No s'ha pogut esborrar l'article :/",
          });
        }

        if(!articleDeleted) {
          return res.status(404).send({
            status: "error",
            missatge: "No s'ha pogut esborrar l'article :/",
          });
        }
        return res.status(200).send({
          status: "success",
          article: articleDeleted,
        });
      }
    );
  },
}; // Final del controlador

module.exports = controller;

 */
