/**
 * Avaluació de paràmetres i retorn d'array complet de caràcters seleccionats
 *
 * Parametres disponibles:
 *  - tots
 *  - minuscules
 *  - majuscules
 *  - numeros
 *  - caractersEspecials
 *  - evitaSimilars
 */

const caracters = require("./caracters");
var caracter = new caracters();

class Parametres {
  gestorParametres(arrayParametres) {
    var taulaCaracters = [];
    var evitaSimilars = false;

    // Comprovem prèviament si es volen evitar caràctes similars
    for (var valor in arrayParametres) {
      evitaSimilars = arrayParametres[valor] == "evitaSimilars" ? true : false;
    }
    if (arrayParametres[0] == "tots") {
      taulaCaracters = caracter.minuscules(true);
      taulaCaracters = taulaCaracters.concat(caracter.majuscules(true));
      taulaCaracters = taulaCaracters.concat(caracter.numeros(true));
      taulaCaracters = taulaCaracters.concat(caracter.caractersEspecials(true));
    } else {
      for (let i = 0; i <= arrayParametres.length; i++) {
        switch (arrayParametres[i]) {
          case "minuscules":
            taulaCaracters = taulaCaracters.concat(
              caracter.minuscules(evitaSimilars)
            );
            break;
          case "majuscules":
            taulaCaracters = taulaCaracters.concat(
              caracter.majuscules(evitaSimilars)
            );
            break;
          case "numeros":
            taulaCaracters = taulaCaracters.concat(
              caracter.numeros(evitaSimilars)
            );
            break;
          case "caractersEspecials":
            taulaCaracters = taulaCaracters.concat(
              caracter.caractersEspecials(evitaSimilars)
            );
            break;
        }
      }
    }

    return taulaCaracters;
  }
}

module.exports = Parametres;
