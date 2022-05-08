const { Router } = require('express')
const clase = require('./databases/ProdutcsClass.js')

const productos = new clase('./productos_resultado.txt')

const routerProductos = Router();

const productsController = {
    async getAll (req,res) {
        const allProducts = await productos.getAll();
        await res.json(allProducts)
    },
    async getRandom (req,res) {
        const randomProduct = await productos.getRandom();
        await res.json(randomProduct)
    }
}

// app.get('/api/productos/:id', (req,res)=>{
//     const { id } = req.params
//     await res.json(randomProduct)
// })


routerProductos.get('/', productsController.getAll);

routerProductos.get('/productosRandom', productsController.getRandom);

module.exports = { routerProductos };