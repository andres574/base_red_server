const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
       this.PORT = process.env.PORT;
       this.usuariosPath = '/api/usuarios';


       //middlewares

       this.middlewares();

       //rutas de la aplicacion
        this.routes();

    }

    middlewares(){
        //directorio publico
        this.app.use(cors());

        // parse y lectura de body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));       
    }
    

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('servidor corriendo en el puerto:', this.PORT);
        })
    }


}

module.exports = Server;