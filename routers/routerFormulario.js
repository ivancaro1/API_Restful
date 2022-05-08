const express = require('express');
const { Router } = require('express')
const { controladoresWeb } = require('../controllers/controladorWeb.js')

const routerWeb = new Router();

routerWeb.use(express.json());
routerWeb.use(express.urlencoded({extended: true}));

routerWeb.get('/inicio', controladoresWeb.inicio);

module.exports = { routerWeb };