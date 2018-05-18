/**
 * 
 * Muita ateção em atribuir valor ao this
 * pois o mesmo é uma referencia global
 * dependendo do que for passado sera 
 * considerado uma variavel global
 */

let comparaComThis = function(param){
    console.log(this===param)
}
comparaComThis(global)

/**
 * Fazendo a comparação com o bind
 * passando a referencia acima usando 
 * o bind this passar a ser um obj
 * com isso deixa de ser global
 * 
 */

const obj ={}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)