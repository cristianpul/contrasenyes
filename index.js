"use strict";

var app = require("./app");
var port = 3001;

// Creaci� de servidor i escoltar peticions
app.listen(port, () => {
  console.log("Servidor corrent en http://localhost:" + port);
});
