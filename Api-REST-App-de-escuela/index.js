'use strict'

var express = require('express')
var mongoose = require('mongoose')

mongoose.Promise = global.Promise
var app = require('./app')

var port = 3377

mongoose.connect('mongodb://localhost:27017/estudiantes')
.then(() =>{
    console.log("coneccion realizada con exito")

    app.listen(port, () => {
        console.log("Codigo ejecutado")
    })
})

.catch(err =>{
    console.log("Error al conectar", err)
})
