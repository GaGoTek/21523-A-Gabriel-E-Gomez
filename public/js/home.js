// const e = require("express");


//Referencia al formulario
const formGuardar = document.querySelector('#form-guardar');

formGuardar.addEventListener('submit', async (e)=>{
    e.preventDefault();

    //Capturar datos del formulario
    const inputTitulo = document.querySelector('#titulo-post').value;
    const inputContenido = document.querySelector('#contenido-post').value;

    //Enviar datos al servidor
    // console.log(inputTitulo);
    // console.log(inputDetalle);
    const response = await fetch ('/nueva-publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            titulo: inputTitulo,
            contenido: inputContenido
        })
    })
    const data = await response.json();

    alert(data.msg);
})