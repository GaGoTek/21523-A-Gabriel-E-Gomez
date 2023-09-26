const formGuardar = document.querySelector('#form-guardar');

formGuardar.addEventListener('submit', async (e)=>{
    e.preventDefault();

    //Capturar datos del formulario
    const inputTitulo = document.querySelector('#titulo-post').value;
    const inputContenido = document.querySelector('#contenido-post').value;
    const inputFecha = document.querySelector('#fecha').value;
    const inputUrl_img = document.querySelector('#url-img').value;
    const inputAutor = document.querySelector('#autor').value;

    //Enviar datos al servidor
    console.log(inputTitulo);
    console.log(inputContenido);
    console.log(inputUrl_img);
    console.log(inputFecha);
    console.log(inputAutor);



    const response = await fetch ('/admin/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            titulo: inputTitulo,
            contenido: inputContenido,
            url_imagen: inputUrl_img,
            fecha: inputFecha,
            autor: inputAutor
        })
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"
})