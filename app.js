//Importacion de Librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv')

//Conexion a la Base de Datos
const {sequelize} = require('./database');

sequelize.authenticate()
.then(()=> console.log("===> OK conexión a Base de Datos Establecida ===>"))
.catch( err => console.log('===XXX Error al conectar Base de Datos:===', err))


require('ejs');
dotenv.config()

const app = express()

const port = process.env.PORT || 4000;



//Middlewares
app.use(cors()) //protocolo para permitir las cargas de recursos segun el origen de la solicitud
app.use(morgan('combined')) //Que obtenga informacion de las solicitudes al servidor
app.use(express.json()) //Que el servidor interprete codigo json

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))


//Motor de plantillas
app.set('view engine', 'ejs')

//modulos importados
//const rutasBlog = require('./routes/blog.routes')

//rutas
app.use(require('./routes/blog.routes'))
app.use(require('./routes/users.routes'))


app.listen(port, ()=> console.log(`Bienvenido, el servidor se está ejecutando en http://localhost:${port}`))

