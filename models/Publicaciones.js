const {Sequelize, DataTypes, sequelize } = require('../database');

const PublicacionSchema = sequelize.define('Publicaciones', {
    // Definicion de modelo de atributos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        //defaultValue: "John Doe"
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true
        //defaultValue: DataTypes.NOW
      }
  }, {
    tableName: 'tabla_del_post',
    timestamps: false

  });



//   User.sync({force: true})
//     .then(()=> {
//         console.log("The table for the User was just (re)created!");
//     })
//     .catch(err => console.log(err);)

module.exports = PublicacionSchema;