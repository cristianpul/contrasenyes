/**
 * index.js
 */
var app = require("./app");
var port = 3000;

// Creació de servidor i escoltar peticions
app.listen(port, () => {
  console.log("Servidor corrent en http://localhost:" + port);
});
