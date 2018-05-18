/**
 * Função em JS é First-Class Object(Citizens)
 * Higher-order function
 * 
 * 
 * Criar de forma literal
 *  se não tiver retorno ... ela retorna undefined
 * 
 */

 function fun1(){

 }

 // Armazenar em uma variavel
 //atribui uma constante de uma funcao anonima
 const fun2 = function(){

 }

 // Armazenar em um array
 const array = [function(a,b){return a+b},fun1,fun2]

 console.log(array[0](2,3))

 // Armazenar em um atributo de objeto
 const obj = { }
 obj.falar = function(){
     return "Opa";
 }
 console.log(obj.falar())

 //Passar uma como parametro

 function run(fun){
     fun()
 }

 run(function(){console.log("chamando uma funcao")})

 // uma funcao pode retornar de uma funcao

 function soma(a,b){
     return function(c){
         console.log(a+b+c)
     }
 }

 soma(2,3)(5)
const contSomar = soma(3,6)
contSomar(5)
