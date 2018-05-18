const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos())//Converte para o formato JSON
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//Converte para o formato JSON
})

app.post('/produtos',(req,res,next)=>{
    //res.send({nome:'Notebook',preco:123.45})//converte para json no envio
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//Converte para o formato JSON
})

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})
