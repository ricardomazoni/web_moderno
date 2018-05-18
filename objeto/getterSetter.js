/**
 * quando a notação de uma variavel
 * estiver com o '_' no inicio 
 * parte do principio que a mesma 
 * sera uma var PRIVATE, isso é 
 * um Convenção
 */
const sequencia = {
    _valor:1,//convenção
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=900
console.log(sequencia.valor,sequencia.valor)