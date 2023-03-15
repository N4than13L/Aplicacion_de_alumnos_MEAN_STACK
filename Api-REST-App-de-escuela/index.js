"use strict";
// Requerimientos
var express = require("express");
var bodyParser = require("body-parser");
const { conexion } = require("./database/conexion");

var cors = require("cors");

// Cargar Express
var app = express();
var puerto = 3377;

// cargar archivos de rutas.
var estudiantes_rutas = require("./Rutes/rutes");

/* Middlewears
 Confifuracion para que boyoparser funcione bien */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion del cors.
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    status: "200",
    message: "back-end de aplicacion de escuela M.E.A.N Stack con Node js",
  });
});

// reescribir rutas
app.use("/api", estudiantes_rutas);

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto " + puerto);
});

/* Exportar el modulo app  */
module.exports = app;
