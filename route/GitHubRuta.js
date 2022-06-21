const express = require('express');
const route = express.Router();
const GitHubUsuarioModelo = require('../model/GitHubUsuarioModelo');
const axios = require('axios');
const GitHubServicio = require('../service/GitHubServicio');

const GITHUB_INFO = '/:userName';

const service = new GitHubServicio();

route.get(GITHUB_INFO, (req, res, next) => {
    let userName = req.params.userName;
    let github_usuario = new GitHubUsuarioModelo();
    service.getUserInfo(userName)
        .then((result) => {
            github_usuario.setData = result.data;
            github_usuario.setSuccess = true;
            github_usuario.setMessage = `GET ${userName} info successfully.`;
            res.json(github_usuario);
        }, (error) => {
            github_usuario.setData = error.response.data;
            github_usuario.setSuccess = false;
            github_usuario.setMessage = `GET ${userName} info unsuccessfully.`;
            res.json(github_usuario);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});

module.exports = route;