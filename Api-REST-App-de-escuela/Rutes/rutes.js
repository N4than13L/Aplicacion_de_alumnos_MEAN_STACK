"use strict";
var express = require("express");
var controllers = require("../Controller/controller");
var router = express.Router();

var Inventory = require("../Controller/InventoryController");

//Rutas de pruebas.
router.get("/home", controllers.home);
router.get("/test", controllers.test);

//Middleware
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart({ uploadDir: "./uploads" });

//Rutas del API
router.post("/agregar-alumnos", controllers.agregar_Alumno);
router.get("/obtener-alumno/:id?", controllers.obtenerAlumno);
router.get("/listado-de-alumnos", controllers.obtenerTodosLosAlumnos);
router.put("/actualizar-alumno/:id", controllers.actualizar_Reg_Alumos);
router.delete("/eliminar-alumno/:id", controllers.BorrarAlumno);

// Ruta para poder subir imagen al API.
router.post("/subir-image/:id", multipartMiddleware, controllers.subirImagen);
router.get("/obtener-imagen/:image", controllers.obtener_imagen);

// Rutas para Subir inventario.
router.post("/subir-inventario", Inventory.addInventory);
router.get("/obtener-item/:id?", Inventory.mostrarItem);
router.get("/listado-de-inventario", Inventory.obtenerInventario);
router.put("/actualizar-item/:id", Inventory.actualizarItem);
router.delete("/eliminar-item/:id", Inventory.BorrarItem);

module.exports = router;
