"use strict";

var express = require("express");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var app = require("./app");

var port = 3377;

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
