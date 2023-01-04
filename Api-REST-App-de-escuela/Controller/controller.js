"use strict";

var Modelo = require("../Model/models");
var fs = require("fs");

var controller = {
  //Rutas de Prueba.
  home: function (req, res) {
    return res.status(200).send({
      message: "Hola Mundo",
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: "Ruta para confirmar que todo anda bien",
    });
  },

  //C.R.U.D para el api.
  agregar_Alumno: function (req, res) {
    var modelo = new Modelo();
    var params = req.body;

    modelo.nombre = params.nombre;
    modelo.apellido = params.apellido;
    modelo.edad = params.edad;
    modelo.sexo = params.sexo;
    modelo.clase = params.clase;
    modelo.image = null;

    modelo.save((err, Guardar_Info) => {
      if (err) return res.status(500).send({ message: "error al guardar" });
      if (!Guardar_Info)
        return res.status(404).send({ message: "No se ha podido guardar" });

      return res.status(200).send({
        message: "Estudiante agregado con exito",
        modelo: Guardar_Info,
      });
    });
  },

  obtenerAlumno: function (req, res) {
    var IdAlumno = req.params.id;

    if (IdAlumno == null) {
      return res.status(404).send({ message: "Infomacion no existe" });
    }

    Modelo.findById(IdAlumno, (err, Alumno) => {
      if (err)
        return res
          .status(500)
          .send({ message: "error al devolver el listado" });
      if (!Alumno)
        return res.status(404).send({ message: "Infomacion no existe" });

      return res.status(200).send({
        Alumno,
      });
    });
  },

  obtenerTodosLosAlumnos: function (req, res) {
    //sort para ordenar mejor ya sea el campo que sea (siempre y cuando sea numerico).

    Modelo.find({})
      .sort("-edad")
      .exec((err, alumnos) => {
        if (err) return res.status(500).send({ message: "error" });
        if (!alumnos)
          return res
            .status(404)
            .send({ message: "No hay ALumnos Registrados" });

        return res.status(200).send({
          alumnos,
        });
      });
  },

  actualizar_Reg_Alumos: function (req, res) {
    var IdAlumno = req.params.id;
    var update = req.body;

    Modelo.findByIdAndUpdate(
      IdAlumno,
      update,
      { new: true },
      (err, AlumnoActualzado) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Error al devolver actualizar" });
        if (!AlumnoActualzado)
          res.status(404).send({ message: "informacion no existe" });

        return res.status(200).send({
          modelo: AlumnoActualzado,
        });
      }
    );
  },

  BorrarAlumno: function (req, res) {
    var IdAlumno = req.params.id;

    Modelo.findByIdAndDelete(IdAlumno, (err, AlumnoEliminado) => {
      if (err)
        return res.status(500).send({ message: "Error Al eliminar alumno" });
      if (!AlumnoEliminado)
        return res.status(404).send({ message: "Informacion no existe" });

      return res.status(200).send({
        message: "Registro Eliminado con Exito",
        modelo: AlumnoEliminado,
      });
    });
  },

  subirImagen: function (req, res) {
    var ImagenId = req.params.id;
    var fileName = "Imagen no subida..";

    if (req.files) {
      var filePath = req.files.image.path;
      var fileSplit = filePath.split("\\");
      var fileName = fileSplit[1];
      var exSplit = fileName.split(".");
      // para el formato de archivo
      var fileExt = exSplit[1];

      if (
        fileExt == "png" ||
        fileExt == "jpg" ||
        fileExt == "jpeg" ||
        fileExt == "gif"
      ) {
        Modelo.findByIdAndUpdate(
          ImagenId,
          { image: fileName },
          { new: true },
          (err, ImageUpdated) => {
            if (err)
              return res.status(500).send({ message: "error al enviar" });
            if (!ImageUpdated)
              return res
                .status(404)
                .send({ message: "Imagen no existente o no subida" });

            return res.status(200).send({
              file: ImageUpdated,
            });
          }
        );
      } else {
        fs.unlink(filePath, (err) => {
          return res.status(200).send({
            message: "El formato de la imagen no es valido",
          });
        });
      }
    } else {
      return res.status(200).send({
        messages: fileName,
      });
    }
  },
};

module.exports = controller;
