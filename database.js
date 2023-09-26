const { Sequelize, DataTypes } = require('sequelize');


// Instancia de conexion a la base de datos.
const sequelize = new Sequelize('pruebabase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });



module.exports = {
sequelize,
Sequelize,
DataTypes
}