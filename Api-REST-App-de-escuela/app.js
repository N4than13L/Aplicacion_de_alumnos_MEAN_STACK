"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

// archivos de  rutas

var rutas = require("./Rutes/rutes");

// middleweares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

//rutas
app.use("/api", rutas);

// exportar
module.exports = app;
