const Express = require('express');
const App = Express();
const Multer = require('multer');
const path = require('path');

App.set('view engine', "ejs");


const storage = Multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})


const upload = Multer({ storage });

App.get('/', (req, res) => {
    res.render('index');
})

App.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo Recebido");
})

App.listen(8080, () => {
    console.log(`Servidor Esta Rodando Na Porta 8080`)
});