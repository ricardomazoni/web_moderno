const saudacao = "Opa" // contexto lexico

function exec(){
    const saudacao = "Falllaaa" // contexto lexico
    return saudacao
}

console.log(saudacao)
console.log(exec())

//Objetos sao grupos aninhados de pares nomes/valor

const cliente = {
    nome:"Ricardo",
    idade:32,
    peso:90,
    endereco:{
        logradouro:"Rua America",
        numero: 1
    }

}
console.log(cliente)