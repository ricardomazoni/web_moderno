const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
/**
 * Quando é post os dados do formulario vem no 
 * req.body
 * Quando é get os dados do formulario vem no 
 * req.query
 */
app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send('<h1>Parabens. Usuário incluido !</h1>')
})

app.post('/usuarios/:id',(req,resp)=>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuário Alterado !</h1>')
})


app.listen(3003)