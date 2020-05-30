/**
 * Llibreria de conjunts de caràcters que s'utilitzan per crear les contrasenyes
 *
 * En base a numeració de caràcters ascii, generar col·leccions de caràcters
 * de a-z, A-Z, 0-9, caràcters especials i
 * eliminació de caràcters similars ( e.g. i, l, 1, L, o, 0, O )
 */

class Caracters {
  minusculesConjunt = { 1: { inici: 97, fi: 122 } };
  majusculesConjunt = { 1: { inici: 65, fi: 90 } };
  numerosConjunt = { 1: { inici: 48, fi: 57 } };
  caractersEspecialsConjunt = {
    1: { inici: 36, fi: 47 },
    2: { inici: 58, fi: 64 },
    3: { inici: 91, fi: 96 },
    4: { inici: 123, fi: 126 },
  };
  caractersSimilarsConjunt = [
    "l",
    "|",
    "1",
    "I",
    "/",
    "\\",
    "o",
    "O",
    "0",
    "`",
    "´",
    "'",
  ];

  caractersAscii(conjunt, eliminaCaractersSimilars) {
    var arrayCaracters = [];

    for (let j in conjunt) {
      for (let i = conjunt[j].inici; i <= conjunt[j].fi; i++) {
        if (eliminaCaractersSimilars) {
          var similar = false;
          var caracterTemporal = String.fromCharCode(i);
          for (let k = 0; k < this.caractersSimilarsConjunt.length; k++) {
            if (caracterTemporal === this.caractersSimilarsConjunt[k]) {
              similar = true;
            }
          }
          if (!similar) {
            arrayCaracters.push(caracterTemporal);
          }
        } else {
          if (String.fromCharCode(i) == "\\") {
            arrayCaracters.push("@");
          } else {
            arrayCaracters.push(String.fromCharCode(i));
          }
        }
      }
    }
    return arrayCaracters;
  }

  minuscules(eliminaCaractersSimilars) {
    var minusculesArray = this.caractersAscii(
      this.minusculesConjunt,
      eliminaCaractersSimilars
    );
    return minusculesArray;
  }

  majuscules(eliminaCaractersSimilars) {
    var majusculesArray = this.caractersAscii(
      this.majusculesConjunt,
      eliminaCaractersSimilars
    );
    return majusculesArray;
  }

  numeros(eliminaCaractersSimilars) {
    var numerosArray = this.caractersAscii(
      this.numerosConjunt,
      eliminaCaractersSimilars
    );
    return numerosArray;
  }

  caractersEspecials(eliminaCaractersSimilars) {
    var caractersEspecialsArray = this.caractersAscii(
      this.caractersEspecialsConjunt,
      eliminaCaractersSimilars
    );

    return caractersEspecialsArray;
  }
}

module.exports = Caracters;
