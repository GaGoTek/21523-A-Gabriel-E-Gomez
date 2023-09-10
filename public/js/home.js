// const e = require("express");

const formGuardar = document.querySelector('#form-guardar');

formGuardar.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Capturar datos del formulario
    const inputTitulo = document.querySelector('#titulo-post').value;
    const inputDetalle = document.querySelector('#detalle-post').value;

    //Enviar datos al servidor
    console.log(inputTitulo);
    console.log(inputDetalle);
})