const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({dest:'upload/'})

app.post('/imagenes/free', upload.single('save'), (req, res) => {
    console.log(req.file)
    res.send('Termina')
})

app.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000')
})