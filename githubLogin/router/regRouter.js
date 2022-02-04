const express = require('express');
const  route =  express.Router();
const control = require('../control/regControl');

route.post('/signup',control.saveRegControl);
route.get('/get/:email',control.regGetController);

module.exports = route;

