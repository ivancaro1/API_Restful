const express = require('express');
const { Router } = require('express')
const { productsController } = require('../controllers/controladorApi.js')

const routerProductos = new Router();

routerProductos.use(express.json());
routerProductos.use(express.urlencoded({extended: true}));

routerProductos.get('/api/productos', productsController.getAll);
routerProductos.post('/api/productos', productsController.save);
routerProductos.get('/api/productos/:id', productsController.getById);
routerProductos.delete('/api/productos/:id', productsController.deleteById);
routerProductos.put('/api/productos/:id', productsController.replaceProduct);
routerProductos.get('/api/productos/productosRandom', productsController.getRandom);

module.exports = { routerProductos };