const { clase } = require('./databases/ProdutcsClass.js')

const productos = new clase('./productos_resultado.txt')


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


module.exports = { controladorApi };