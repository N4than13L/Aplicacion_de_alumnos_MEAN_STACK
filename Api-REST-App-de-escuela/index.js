"use strict";
var express = require("express");
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var app = require("./app");

var port = 3377;

// mongodb+srv://natharevolution:jcEuOEQjFZ74jI8t@escuela-mean-stack.nrmfvpw.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/estudiantes
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://natharevolution:jcEuOEQjFZ74jI8t@escuela-mean-stack.nrmfvpw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("coneccion realizada con exito");

    app.listen(port, () => {
      console.log("Codigo ejecutado");
    });
  })

  .catch((err) => {
    console.log("Error al conectar", err);
  });
