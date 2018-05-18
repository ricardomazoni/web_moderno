//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(3,2)
imprimirSoma(2)

// funcao com retorno
function soma(a=0,b=0){
    return a + b
}

console.log(soma(3,9))
console.log(soma())