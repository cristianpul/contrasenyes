function copiaContrasenya() {
  var contrasenyaPerCopiar = document.getElementById("contrasenya");

  contrasenyaPerCopiar.select();
  contrasenyaPerCopiar.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");

  var tooltip = document.getElementById("copiaTooltip");
  tooltip.innerHTML = "Copiada 🚀";
}

function regeneraContrasenya() {
  console.log("Regenera!");
}

function foraTooltip(element) {
  var tooltip = document.getElementById("copiaTooltip");

  if (element === "copiaTooltip") {
    tooltip.innerHTML = "Copia";
  } else {
    tooltip.innerHTML = "Regenera";
  }
}
