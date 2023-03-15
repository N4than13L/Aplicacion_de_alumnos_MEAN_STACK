const mongoose = require("mongoose");

/* 
conexion en remoto.
mongodb+srv://natharevolution:jcEuOEQjFZ74jI8t@escuela-mean-stack.nrmfvpw.mongodb.net/?retryWrites=true&w=majority
 contrasena: jcEuOEQjFZ74jI8t
*/

const conexion = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://natharevolution:jcEuOEQjFZ74jI8t@escuela-mean-stack.nrmfvpw.mongodb.net/?retryWrites=true&w=majority"
    );

    // Parametros dentro de objeto // solo en caso de aviso
    // useNewUrlParser: true
    // useUnifiedTopology: true
    // useCreateIndex: true

    console.log("Conectado correctamente a la base de datos mi_blog !!");
  } catch (error) {
    console.log(error);
    throw new Error("No se ha podido conectar a la base de datos !!");
  }
};

module.exports = {
  conexion,
};
