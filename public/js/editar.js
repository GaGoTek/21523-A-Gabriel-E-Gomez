
// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

const obtenerPublicacion = async (id) => {
    const response = await fetch(`/admin/editar/${id}`)
    const data = await response.json()
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    const id = formGuardar.dataset.id
    const publicacion = await obtenerPublicacion(id);

    const titulo = document.querySelector('#titulo-post')
    const contenido = document.querySelector('#contenido-post')
    const url_imagen = document.querySelector('#url-img')
    const fecha = document.querySelector('#fecha')
    const autor = document.querySelector('#autor')


    titulo.value = publicacion.titulo;
    contenido.value = publicacion.descripcion;
    url_imagen.value = publicacion.url_imagen;
    fecha.value = publicacion.fecha;
    autor.value = publicacion.autor;


})


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const contenido = document.querySelector('#contenido-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;

    // Enviar al servidor
    const response = await fetch(`/admin/editar${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, contenido, url_imagen, fecha})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})