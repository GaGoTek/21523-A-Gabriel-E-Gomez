const blogCtrl = {}
const Publicaciones = require('../models/Publicaciones');


blogCtrl.crearPublicacion = async (req, res) => {
    //Recibir datos por Body
    const {
        titulo,
        contenido,
        url_imagen,
        fecha,
     }= req.body;
   
   console.log(`se ha insetado el siguiente texto en el titulo: ${titulo}`);
   console.log(`se ha insetado el siguiente texto en el contenido: ${contenido}`);
   console.log(`se ha insetado la siguiente url de imagen: ${url_imagen}`);
   console.log(`se ha insetado el contenido en la fecha: ${fecha}`);


   const publicacion = await Publicaciones.create(req.body)



    res.send({
        msg: "Publicación creada con exito",
        publicacion
    })   
}


//Consulto todos los registros de publicaciones
blogCtrl.obtenerPublicaciones = async (req, res) => {

const publicaciones = await Publicaciones.findAll();
res.json(publicaciones)
}

//Actualizo una publicacion
blogCtrl.actualizarPublicacion = async (req, res) => {

    const { id } = req.params;
    
    const publicacion = await Publicaciones.findByPk(id)

    publicacion.set(req.body)

    await publicacion.save()

    res.json({
        msg: `La publicación ${req.body.titulo} ha sido actualizada!!!`
    })
}

blogCtrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;
    
    await Publicaciones.destroy({
        where:{
            id
        }
    })

    res.json({
        msg: `La publicación ${req.body.titulo} ha sido eliminada`
    })
}
    




module.exports = blogCtrl;