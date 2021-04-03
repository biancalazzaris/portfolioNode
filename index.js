const { request, response } = require('express');
const express = require('express');
//importando o express no projeto
const app = express()

//instanciando o EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

//criar minhas rotas 
app.get('/:name?/:faculdade?', (req,res) => {
    let name = req.params.name;
    let faculdade = req.params.faculdade;
    let msg = true;
    // let name = 'Maria da Silva';
    // let faculdade = 'IELUSC';

    res.render('index', {
        name, 
        faculdade,
        remoto: true,
        curso: 'Desenvolvimento Web2',
        exibirNotificacao: msg,
    });
});

app.get('/alunos', (req,res) => {
    let alunos = [
        {id:1, nome: 'Bianca', genero: 'Feminino'},
        {id:1, nome: 'Misael', genero: 'Masculino'},
        {id:1, nome: 'Victor', genero: 'Masculino'},
        {id:1, nome: 'Lucas', genero: 'Masculino'},
        {id:1, nome: 'Alexandre', genero: 'Masculino'},
    ];
    
    res.render('alunos', {
        pessoas: alunos
    });

});

app.listen(5000, (erro) =>  {
    if (erro) {
        console.log(erro, 'ops, servidor não conseguiu subir, tente novamente.');
    }else {
        console.log('servidor rodando no endereço: http://localhost:5000')
    }
});