'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//carga de rutas
var album_routes = require('./routes/album');
var image_routes = require('./routes/image');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//configurar cabezeras
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
               'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();

});



//ruta base
app.use('/api', album_routes);
app.use('/api', image_routes);

module.exports = app;