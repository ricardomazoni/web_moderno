// apontando para o endereço de memoria
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

/**
 * no caso abaixo nao ira funcionar
 * pois o objeto pessoa esta como 
 * constante e nao é possível atribuir
 * outro valor para o mesmo
 */
//pessoa = {nome:'Maria'}

/***
 * Existe a funcao Object.freeze
 * Ela congela o objeto criado 
 * e nao da erro, simplesmente 
 * ignora sem dar erro, mantem 
 * sempre o valor atribuido 
 * criado a referencia nao é 
 * alterada
 * não é possivel criar,deletar ou alterar
 */
const pessoaConstante = Object.freeze({nome:'Maria'})
pessoaConstante.nome = 'Ricardo' //ignora
console.log(pessoaConstante)
