"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  sexo: String,
  clase: String,
  image: String,
});

module.exports = mongoose.model("Alumno", projectSchema);
