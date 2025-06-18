// Importar módulo express
const express = require('express');

// Importar módulo mysql
const mysql = require('mysql2')
// App
const app = express();

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


// Rota Hello World
app.get('/', function(req, res){
    res.write('Uilizando o Nodemon');
    res.end();
});

// Servidor
app.listen(8080);
