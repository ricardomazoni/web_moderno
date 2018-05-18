const soma = function(a,b){
    return a + b
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,2)

/**
 * passando uma funcao anonima
 * dentro da funcao que imprimeResultado
 */

imprimirResultado(3,2,function(a,b){
    return a - b

});

const imprimiFala = {
    falar(){/*: function(){*/
        console.log("Fala que eu te escuto")
    }
}

imprimiFala.falar()