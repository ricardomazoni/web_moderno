
/**
 * __dirname -> retorna o diretorio corrente
 */
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

/**
 * forma sicrona
 * so terminara quando finalizar o 
 * arquivo
 * forma assicrona
 * nao ira ate o final do arquivo
 */
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

// forma assicrona se houver outra acao sera executado
// depois porque ira esperar o arquivo ser carregado para
// depois ler e retornar
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// forma rapida.. executou primeiro que o codigo
// anterior
const config = require('./arquivo.json')
console.log(config.db)

// lendo diretorios

fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteudo da pasta')
    console.log(arquivos)
})