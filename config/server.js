//Require dos módulos necessários para o projeto
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

var app = express();

//Ajustando as views
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Ativando os módulos e definindo a pasta de arquivos públicos
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

//Usando o Consign para incluir todos os módulos do projeto
consign()
    .include('app/routes')
    .then('app/models')
    .then('config/mysql.js')
    .then('app/controllers')
    .into(app);

module.exports = app;