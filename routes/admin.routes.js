const router = require("express").Router();


//Ruta para devolver la vista admin
router.get('/admin', (req,res)=>{
    res.render('admin')
}) 

// Ruta para devolver panel de edicion en admin
router.get('/admin/editar/:id', (req, res)=> {
    res.render('editar', { id: req.params.id })
})




module.exports=router;