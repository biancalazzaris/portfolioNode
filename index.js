const express = require('express');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/artigos', (req, res) => {
    res.render('article')
});

app.get('/novo-artigo', (req, res) => {
    res.render('new')
});

app.post('/salvar', (req, res) => {
    let title = req.body.titulo;
    let description = req.body.descricao;
    let datatime = req.body.datahora;
    console.log(`Dados do formulario salvo: Titulo: ${title} Data e hora: ${datatime}  Descricao: ${description} `);

    res.send(`Dados do formulario salvo: Titulo: ${title} Data e hora: ${datatime}  Descricao: ${description}`)
});



app.get('/:name?/:faculdade?', (req,res) => {
    // let name = req.params.name;
    // let faculdade = req.params.faculdade;
    let msg = true;
    let name = 'Maria da Silva';
    let faculdade = 'IELUSC';

    res.render('index', {
        name, 
        faculdade,
        remoto: true,
        curso: 'Desenvolvimento Web 2',
        exibirNotificacao: msg,
    });
});

app.listen(5000, (erro) =>  {
    if (erro) {
        console.log(erro, 'ops, servidor não conseguiu subir, tente novamente.');
    }else {
        console.log('servidor rodando no endereço: http://localhost:5000')
    }
});


// app.get('/alunos', (req,res) => {
//     let alunos = [
//         {id:1, nome: 'Bianca', genero: 'Feminino'},
//         {id:1, nome: 'Misael', genero: 'Masculino'},
//         {id:1, nome: 'Victor', genero: 'Masculino'},
//         {id:1, nome: 'Lucas', genero: 'Masculino'},
//         {id:1, nome: 'Alexandre', genero: 'Masculino'},
//     ];
    
//     res.render('alunos', {
//         pessoas: alunos
//     });

// });
