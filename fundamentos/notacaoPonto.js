
/*
 Mesmo sendo uma funcao, é preciso instanciar para faze a chamada
 
*/

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)