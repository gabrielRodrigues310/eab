const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const moment = require('moment')
const Post = require('./models/post')

// config
  //template engine
   app.engine('handlebars', handlebars({
     defaultLayout: 'main',
     helpers: {
       formatDate: (date) => {
         return moment(date).format('DD/MM/YYYY')
       }
     }
   }))
   app.set('view engine', 'handlebars')
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())

   // Add files
   app.use(express.static(__dirname + "/public/"))


//rotas

app.get('/', function(req, res){
  Post.findAll().then(function(posts){
    console.log(posts.map(item => item.toJSON()))
    res.render('home', {posts: posts.map(item => item.toJSON()) })

  })
})

app.get('/cad', function(req, res){
  res.render('formulario')
})

app.post("/add", function(req, res){
  Post.create({
    nome: req.body.nome,
    conteudo: req.body.conteudo
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send("Houve um erro: " +erro)
  })
});

//app.get("/", function(req, res){
  //res.sendfile(__dirname+ "/html/index.html");
//});


app.listen(8082, function(){
  console.log("Servidor rodando!!!!!!");
});
