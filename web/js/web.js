function caracteristiques() {
  let llargada = document.getElementById('llargada').value;
  let minuscules = document.getElementById('minuscules').checked;
  let majuscules = document.getElementById('majuscules').checked;
  let numeros = document.getElementById('numeros').checked;
  let especials = document.getElementById('especials').checked;
  let evitaSimilars = document.getElementById('evita-similars').checked;

  let parametres = peticioInicial + '/' + llargada;
  if (minuscules || majuscules || numeros || especials || evitaSimilars) {
    parametres += '/p=';
    if (minuscules) {
      parametres += 'minuscules;';
    }
    if (majuscules) {
      parametres += 'majuscules;';
    }
    if (numeros) {
      parametres += 'numeros;';
    }
    if (especials) {
      parametres += 'caractersEspecials;';
    }
    if (evitaSimilars) {
      parametres += 'evitaSimilars;';
    }
    parametres = parametres.slice(0, -1);
  }
  return parametres;
}

function actualitzaContrasenya(peticio) {
  peticioActualitza.open('GET', peticio);
  peticioActualitza.responseType = 'json';
  peticioActualitza.send();

  peticioActualitza.onload = function () {
    let contrasenyaJSON = peticioActualitza.response;
    console.log(contrasenyaJSON.contrasenya);
    document.getElementById('contrasenya').value = contrasenyaJSON.contrasenya;
  };
}

function copiaContrasenya() {
  let contrasenyaPerCopiar = document.getElementById('contrasenya');

  contrasenyaPerCopiar.select();
  contrasenyaPerCopiar.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand('copy');

  let tooltip = document.getElementById('copiaTooltip');
  tooltip.innerHTML = 'Copiada 🚀';
}

function foraTooltip(element) {
  let tooltip = document.getElementById('copiaTooltip');

  if (element === 'copiaTooltip') {
    tooltip.innerHTML = 'Copia';
  } else {
    tooltip.innerHTML = 'Regenera';
  }
}
