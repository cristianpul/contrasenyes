/**
 * Generació de contrasenyes utilitzant la llibreria caracters.js
 */

const caracters = require("./caracters");
var caracter = new caracters();

class Contrasenyes {
  getContrasenya() {
    // Desem tots els caràcters disponibles a un array
    var taulaCaracters = caracter.minuscules(true);
    taulaCaracters = taulaCaracters.concat(caracter.majuscules(true));
    taulaCaracters = taulaCaracters.concat(caracter.numeros(true));
    taulaCaracters = taulaCaracters.concat(caracter.caractersEspecials(true));

    // Creem la variable per guardar la contrasenya
    var caractersContrasenya = "";

    // Composem la contrasenya
    for (let i = 1; i <= 10; i++) {
      caractersContrasenya +=
        taulaCaracters[Math.floor(Math.random() * taulaCaracters.length)];
    }

    return caractersContrasenya;
  }

  getContrasenya2(llargada) {
    return caracter.minuscules(true);
  }
}

module.exports = Contrasenyes;
