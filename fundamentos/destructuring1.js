//novo recurso do ES2015

const pessoa={
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'Rua ABC',
        numero:1000
    }
}
// Atribuindo os campos pessoa.nome e pessoa.idade para as variaveis nome e pessoa
const{nome,idade}=pessoa
console.log(pessoa)
console.log(nome,idade)

// Atribuindo os campos pessoa.nome e pessoa.idade para as variaveis n e i
const{nome:n,idade:i}=pessoa
console.log(n,i)
// Se tentar fazer destructind de atibutos que nao existe sera mostrado undefined
// 

