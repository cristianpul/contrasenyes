/**
 * Generació de contrasenyes utilitzant la llibreria caracters.js
 */

const caracters = require("./caracters");
var caracter = new caracters();

class Contrasenyes {
  getContrasenya() {
    return caracter.majuscules(true);
  }

  getContrasenya2(llargada) {
    console.log(llargada);
    return caracter.minuscules(true);
  }
}

module.exports = Contrasenyes;
