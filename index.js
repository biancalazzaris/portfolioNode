const { request, response } = require('express');
const express = require('express');

const app = express()

app.get('/', function(req, res) {
    res.send('<h1>Página principal</h1>');
})

app.get('/perfil', function(req, res){
    const nome = 'Bianca Lazzaris';
    const idade = 25;
    const sexo = 'Mulher';
    res.send(`<h4>Olá, eu sou a ${nome}, tenho ${idade} anos, sou ${sexo}</h4>`);
});

app.get('/graduacao', function(req, res){
    res.send('<h4>Página sobre seu curso de graduação!</h4>');
});

app.get('/trabalho', function(req, res){
    res.send('<h4>Página sobre o seu trabalho</h4>');
});

app.get('/contato', function(req, res){
    res.send('<h4>Entre em contato</h4>');
});


app.listen(3000, (erro) =>  {
    if (erro) {
        console.log(erro, 'ops, servidor não conseguiu subir, tente novamente.');
    }else {
        console.log('servidor rodando no endereço: http://localhost:3000')
    }
});