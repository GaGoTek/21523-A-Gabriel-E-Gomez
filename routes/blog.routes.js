// se implemeta el enrutador de express
const router = require('express').Router();

router.get('/home', (req, res)=> {
   res.render('home');
//    res.send('Hello word')
})

router.get('/', (req, res)=> {
    res.render('home')
})

router.post('/nueva-publicacion', function (req, res) {
    //Recibir datos por Body
    const {titulo, detalle }= req.body
  
   // TODO: SE DEBE guardar los datos en una base de datos
   console.log(`se ha insetado el siguiente texto en el titulo: ${titulo}`);
   console.log(`se ha insetado el siguiente texto en el detalle: ${detalle}`);

   return res.send({msg: "Publicación guardada con exito"})
   
   

})

module.exports = router;