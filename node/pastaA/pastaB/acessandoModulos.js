const moduloA = require('../../moduloA')
console.log(moduloA.ateLogo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const oiC = require('./pastaC/index')
console.log(oiC.ola)

/*
const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom dia !')
    res.end()
}).listen(8080)
*/