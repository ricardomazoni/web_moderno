const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 124.99,
    desconto:0.15
}

/**
 * stringify -> converte um objeto em Json
 * err, se retornar null o valor sera false
 */
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),err=>{
    console.log(err || "Arquivo gerado com sucesso")
})