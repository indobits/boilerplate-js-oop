const express = require('express');
const route = express.Router();
const Cliente = require('../model/ClienteModelo');

route.get('/cliente1', (req, res, next) => {
    let cliente = new Cliente();
    cliente.setNombre = 'Dariogfhsdgfhdsgfdhs';
    cliente.setApellido = 'Ramos';
    cliente.setEstado = true;
    res.json(cliente);
});

route.get('/cliente2', (req, res, next) => {
    let cliente = new Cliente('Andrea','Patron',true,500,10);
    res.json(cliente);
});

module.exports = route;