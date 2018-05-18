const alunos = [
    {nome:'Joao',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true},
]

// desafio 1: todos os alunos são bolsistas ?


const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
},0)


const todosBolsistas = (resultado,bolsista)=> resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

// desafio 2: alguem é bolsista ?
const todosBolsistas2 = (resultado,bolsista)=> resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas2))


// desafio 3: quem sao os bolsistas
const osBolsistas = alunos.map(a=> a.bolsista? a.nome: a.bolsista)
console.log(osBolsistas)

const osBolsistas2 = alunos.map(function(a){
    if (a.bolsista){
        return a.nome
    }
})

console.log(osBolsistas2)
