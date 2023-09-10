// se implemeta el enrutador de express
const router = require('express').Router();

router.get('/home', (req, res)=> {
   res.render('home');
//    res.send('Hello word')
})

// router.get('/', (req, res)=> {
//     res.send('Hello word')
// }

router.post('/user', function (req, res) {
    //Recibir datos por Body
    const {name, lastname }= req.body
    res.send(`Bienvenido ${name} ${lastname}`)    
})

module.exports = router;