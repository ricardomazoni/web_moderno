// forma normal
let dobro = function(a){
    return 2 * a
}
/**
 *  forma arrow
 * não precisa usar a function
 * é sempre uma funcao anonima tem que ser 
 * referenciada em uma variavel ou 
 * constante
 */

dobro =(a)=>{
    return 2 * a
}

/**
 * arrow de uma forma mais reduzida
 * facilita o reeuso da funcao
 * dependendo do contexto ajuda pela
 * forma reduzida.
 * 
 */
dobro = a => 2 *a

console.log(dobro(Math.PI))

ola = () =>"Ola arrow "
console.log(ola())