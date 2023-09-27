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
        <div class="col-10 d-flex justify-content-center row mb-5 ">
        <div class="col-6 card d-flex justify-content-center m-6 ">
        <h5 class="card-title">${publicacion.titulo}</h5> 
        <p class="card-text">${publicacion.contenido}</p>   
        <img src="${publicacion.url_imagen}" class="card-img-top img-fluid"
                alt="">
            <div class="card-body">
                <p class= >${publicacion.fecha}</p>
                <p class="fst-italic">Creado por ${publicacion.autor}</p>
            </div>
        </div>
</div>
`
})


///====================================================================================
/// OTRAS VISTAS PARA LAS PUBLICACIONES
///====================================================================================

    //     secciones += `
            
    //         <section class="d-flex gap-2">
    //         <div id="img-public">
    //         <img src="${publicacion.url_imagen}" class="img-fluid rounded border border-0">
    //         </div>
    //         <div class="d-flex flex-column justify-content-between">
    //             <h3 class="text-light">${publicacion.titulo}</h3>
    //             <p  class="text-light">${publicacion.contenido}</p>
    //             <p  class="text-light">${publicacion.fecha}</p>
    //             <p  class="text-light fst-italic">Creado por ${publicacion.autor}</p>
    //         </div>
    //         </section>
    //     `
    // })

//     secciones += `
// <div id="tarj" class="card bg-transparent">
//   <div id="tarj" class="card-body">
//     <h5 class="card-title text-light">${publicacion.titulo}</h5>
//     <p class="card-text text-light">${publicacion.contenido}This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text text-light">${publicacion.fecha}</small></p>
//     <p class="card-text text-light">Creado por ${publicacion.autor}</small></p>
//   </div>
//   <img id="img-public" src="${publicacion.url_imagen}" class="img-fluid rounded border border-0" alt="">
// </div>
// `
// })



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


