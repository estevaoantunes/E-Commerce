// Importar módulo express
const express = require('express');

// Importar módulo express-handlebars
const {engine} = require('express-handlebars');

// Importar módulo mysql
const mysql = require('mysql2')

// App
const app = express();

//Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração de conexão

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projetoecommerce'
});

// Teste de conexão
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!')
});


// Rota principal
app.get('/', function(req, res){
   res.render('formulario');
});

// Servidor
app.listen(8080);
