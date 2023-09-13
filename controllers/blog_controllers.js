const blogCtrl = {}
const Publicaciones = require('../models/Publicaciones');


blogCtrl.crearPublicacion = async (req, res) => {
try {
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
} catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "error al crear nueva publicación"  
    })
   
    
}  
}


//Consulto todos los registros de publicaciones
blogCtrl.obtenerPublicaciones = async (req, res) => {

const publicaciones = await Publicaciones.findAll();
res.json(publicaciones)
}

//Optener una publicación
blogCtrl.obtenerPublicacion = async (req, res)=>{
    const publicacion = await Publicaciones.findByPk(req.params.id)
    return publicacion;


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

//Eliminar publicacion
blogCtrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;
    
    await Publicaciones.destroy({
        where:{
            id
        }
    })

    res.json({
        msg: `La publicación ${req.body.titulo} ha sido eliminada`
        //alert(data.msg)
    })
}
    




module.exports = blogCtrl;