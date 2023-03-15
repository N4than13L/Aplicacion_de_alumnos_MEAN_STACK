"use strict";

var express = require("express");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var app = require("./app");

var port = 3377;

// conexion en remoto.
// mongodb+srv://natharevolution:jcEuOEQjFZ74jI8t@escuela-mean-stack.nrmfvpw.mongodb.net/?retryWrites=true&w=majority
// contrasena: jcEuOEQjFZ74jI8t
mongoose
  .connect("mongodb://localhost:27017/estudiantes")
  .then(() => {
    app.listen(port, () => {
      console.log(
        " Api Rest ejecuntandose en link de prueba: http://localhost:" +
          port +
          "/api/listado-de-alumnos"
      );
    });
  })

  .catch((err) => {
    console.log("Error al conectar", err);
  });
