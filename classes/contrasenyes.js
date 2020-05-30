/**
 * Generació de contrasenyes utilitzant la llibreria caracters.js
 */

const caracters = require("./caracters");
var caracter = new caracters();

class Contrasenyes {
  getContrasenya(llargada, parametres) {
    // Desem tots els caràcters disponibles a un array
    var taulaCaracters = caracter.minuscules(true);
    taulaCaracters = taulaCaracters.concat(caracter.majuscules(true));
    taulaCaracters = taulaCaracters.concat(caracter.numeros(true));
    taulaCaracters = taulaCaracters.concat(caracter.caractersEspecials(true));

    // Creem la variable per guardar la contrasenya
    var caractersContrasenya = "";
    console.log(parametres);
    // Composem la contrasenya
    for (let i = 1; i <= llargada; i++) {
      caractersContrasenya +=
        taulaCaracters[Math.floor(Math.random() * taulaCaracters.length)];
    }

    return caractersContrasenya;
  }
}

module.exports = Contrasenyes;
