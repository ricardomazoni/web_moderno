/**
 * Funcao Construtora
 * 
 */

function Pessoa(nome) {
    this.nome = nome
    this.falar = function(){
        return `Meu nome é ${this.nome}`
    }    
}
/** 
 * new pode ser usado tambem para uma função
 * 
*/
const p1 = new Pessoa('Ricardo')
console.log(p1.falar())