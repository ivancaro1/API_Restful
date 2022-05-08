const express = require('express');
const { routerProductos } = require('./routers/routerProductos.js')
const { routerWeb } = require('./routers/routerFormulario.js')


const app = express();

/* ------------------------------------------------------ */
/* Cargo los routers */
app.use(express.static('public'))
app.use(routerWeb)
app.use(routerProductos)

/* ------------------------------------------------------ */
/* Server Listen */

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error',error => console.log(`Error en el servidor ${error}`))