/**
 * Generació de contrasenyes utilitzant la llibreria caracters.js
 */

const gestioParametres = require("./parametres");
const gestor = new gestioParametres();

class Contrasenyes {
  getContrasenya(llargada, parametres) {
    // Desem tots els caràcters especificats a un array
    var taulaCaracters = gestor.gestorParametres(parametres);

    // Creem la variable per guardar la contrasenya
    var caractersContrasenya = "";

    // Composem la contrasenya
    for (let i = 1; i <= llargada; i++) {
      caractersContrasenya +=
        taulaCaracters[Math.floor(Math.random() * taulaCaracters.length)];
    }

    return caractersContrasenya;
  }
}

module.exports = Contrasenyes;
