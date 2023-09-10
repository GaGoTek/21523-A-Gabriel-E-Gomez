//Importacion de Librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()



const port = 4000;

//Middlewares
app.use(cors()) //protocolo para permitir las cargas de recursos segun el origen de la solicitud
app.use(morgan('common')) //Que obtenga informacion de las solicitudes al servidor
app.use(express.json()) //Que el servidor interprete codigo json

app.get('/', (req, res)=> {
    res.send('Hello word')
})

app.post('/user', function (req, res) {
    //Recibir datos por Body
    const {name, lastname }= req.body
    res.send(`Bienvenido ${name} ${lastname}`)    
})

app.listen(port, ()=> console.log(`Bienvenido, el servidor se está ejecutando en http://localhost:${port}`))

