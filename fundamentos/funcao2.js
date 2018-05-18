// armazenando uma funcao em uma variavel
const soma1 = function(a,b){
    console.log(a+b)
}
soma1(3,6)

//Armazenando uma funcao arrow em uma variavel
const soma2 = (a,b)=>{
    return a + b
}
console.log(soma2(3,6))
//retorno implicito
const soma3 =(a,b)=> a+b
console.log(soma3(3,6))

//retorno implicito
/*const imprimir2 = a=>console.log(a)
imprimir2('Legal !!!')*/

