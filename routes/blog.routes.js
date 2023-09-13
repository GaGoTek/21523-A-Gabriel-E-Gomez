// se implemeta el enrutador de express
const router = require('express').Router();

const { 
    actualizarPublicacion,
    crearPublicacion,  
    eliminarPublicacion,  
    obtenerPublicaciones, 
} = require('../controllers/blog_controllers');

//============================================================
//RUTAS PARA RENDERIZAR VISTAS
//============================================================

router.get('/', (req, res)=> {
   res.render('home');
   res.send('Hello word')
})

// router.get('/', (req, res)=> {
//     res.render('home')
// })



//============================================================
//RUTAS PARA REALIZAR EL CRUD
//============================================================


//Crear Nueva Publicación
router.post('/admin/publicacion', crearPublicacion)


// //Obtener todas las Publicaciones
router.get('/publicaciones', obtenerPublicaciones)


// //Actualizar una Publicación
router.put('/admin/publicacion/:id', actualizarPublicacion)


// //Eliminar una Publicación
router.delete('/admin/publicacion/:id', eliminarPublicacion)


module.exports = router;