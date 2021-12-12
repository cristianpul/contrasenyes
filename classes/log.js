const fs = require('fs');
const doc = 'logs/api-log.txt';

let appendConsultaAPI = function () {
  let fd = obrirDoc('a+');
  appendInfo(fd, "Comprovació d'API realitzada");
  tancaDoc(fd);
};

let appendAPIContrasenya = function (parametres) {
  let info = 'Info: ' + parametres;

  let fd = obrirDoc('a+');
  appendInfo(fd, info);
  tancaDoc(fd);
};

let appendAPIContrasenyaError = function (parametres) {
  let info = 'Error: ' + parametres;

  let fd = obrirDoc('a+');
  appendInfo(fd, info);
  tancaDoc(fd);
};

let mostraLog = function () {
  let info = 'Consulta log';

  let fd = obrirDoc('a+');
  appendInfo(fd, info);

  let data = '<p>' + fs.readFileSync(doc, 'utf8') + '</p>';

  let htmlInfo;
  let linies = data.split('\n');
  for (let linia = 0; linia < linies.length; linia++) {
    htmlInfo += linies[linia] + '<br/>';
  }

  tancaDoc(fd);
  return htmlInfo;
};

function obrirDoc(mode) {
  let fd = fs.openSync(doc, mode);
  return fd;
}

function appendInfo(fd, info) {
  fs.appendFileSync(fd, dataAvui() + ' ' + info + '\n', 'utf8');
}

function tancaDoc(fd) {
  fs.close(fd);
}

function dataAvui() {
  let con = '-';
  let punts = ':';
  let d = new Date();

  let dataAvui =
    d.getFullYear() +
    con +
    d.getMonth() +
    con +
    d.getDate() +
    ' ' +
    d.getHours() +
    punts +
    d.getMinutes() +
    punts +
    d.getSeconds();

  return dataAvui;
}

module.exports = { appendConsultaAPI, appendAPIContrasenya, appendAPIContrasenyaError, mostraLog };
