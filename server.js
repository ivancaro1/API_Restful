const express = require('express');
const { Router } = express.Router
const { routerProductos } = require('./routers/routerProductos.js')
//const { controladorApi } = require('./controllers/controladorApi.js')

const app = express();

/* ------------------------------------------------------ */
/* Cargo los routers */

app.use(routerProductos)

/* ------------------------------------------------------ */
/* Server Listen */

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error',error => console.log(`Error en el servidor ${error}`))