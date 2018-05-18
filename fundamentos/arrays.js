const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
//undefided
console.log(valores[4])

//add um elemento do array
valores[4]=10
console.log(valores[4])
console.log(valores.length)

//funcao push, adiciona elementos no array

valores.push({id:3},false,null,'teste')

console.log(valores)

//pop exclui o ultimo elemento do array

console.log(valores.pop())
console.log(valores)

//delete .. apaga o elemento especifico
delete valores[0]
console.log(valores)


