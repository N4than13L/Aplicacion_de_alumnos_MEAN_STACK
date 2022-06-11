'use strict'

//Cargar archivos 
var express = require('express')
var bodyParser = require("body-parser")
var app = express()
var project_routes = require('./Rutes/rutes')

// Middlewears
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//CORS

//Rutas
app.use('/api', project_routes)

//Exportar

module.exports = app