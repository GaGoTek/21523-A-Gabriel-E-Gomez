const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <a href="#">
            <section class="d-flex gap-2">
            <img id="img-public" src="${publicacion.url_imagen}" class="rounded border border-0"  height=200 >
            <div class="d-flex flex-column justify-content-between">
                <h5>${publicacion.titulo}</h5>
                <p>${publicacion.contenido}</p>
                <p>${publicacion.fecha}</p>
            </div>
            </section>
            </a>
        `
    })


    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})


