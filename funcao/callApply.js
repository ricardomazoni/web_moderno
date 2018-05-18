function getPreco(imposto=0,moeda='R$'){
    return `${moeda} ${this.preco*(1-this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

/**
 * nesse caso vai ocorrer erro pois
 * as variaveis preco e desc
 * nao foram definidas. 
 * se elas fossem declaradas como 
 * global seria visualizada, sendo
 * global.preco = 20
 * global.desc = 0.1
 */
global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())
/**
 * Usando call e apply, funcoes que chama
 * a funcao 
 */

 const carro = {preco:4990, desc: 0.20}

 console.log(getPreco.call(carro))
 console.log(getPreco.apply(carro))
// passsando o contexto e os parametros da funcao getPreco
 console.log(getPreco.call(carro,0.17,'$'))
 console.log(getPreco.apply(carro,[0.17,'$']))