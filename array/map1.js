/**
 *  percorre o array da esquerda para a direita
 *  invocando uma função de retorno em cada elemento
 *  com parâmetros. Para cada chamada de retorno,
 *  o valor devolvido se torna o elemento do novo array.
 *  Depois que todos os elementos foram percorridos, 
 *  map() retorna o novo array com todos os 
 *  elementos “traduzidos”.
 */

const nums = [1,2,3,4,5]

/**
 * for com proposito de multiplicar os dados do array 
 */

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)


const soma10 = e => e +10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)




