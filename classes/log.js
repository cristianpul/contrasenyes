const fs = require('fs');
const doc = 'logs/api-log.txt';

// Asynchronous - Opening File
fs.open(doc, 'a+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log('File open successfully');
});

let appendConsultaAPI = function () {
  appendInfo("Comprovació d'API realitzada");
};

let appendAPIContrasenya = function (parametres) {
  let info = 'Info: ' + parametres;
  appendInfo(info);
};

let appendAPIContrasenyaError = function (parametres) {
  let info = 'Error: ' + parametres;
  appendInfo(info);
};

function appendInfo(info) {
  fs.appendFile(doc, dataAvui() + ' ' + info + '\n', 'utf8', function (err) {
    if (err) throw err;
    console.log('Data is appended to file successfully.');
  });
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

module.exports = { appendConsultaAPI, appendAPIContrasenya, appendAPIContrasenyaError };
