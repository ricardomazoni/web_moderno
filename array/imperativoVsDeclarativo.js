const alunos = [
    {nome: 'Joao', nota: 8.3},
    {nome: 'Maria', nota: 9.4},
    {nome: 'Paulo', nota: 7},
    {nome: 'Ana', nota: 7.9}
]
/**
 * Forma imperativa
 * informa a forma que tem que ser cada detalhe
 * 
*/

let total1 = 0
for(let i=0; i < alunos.length; i++ ){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

/**
 * forma declarativa
 * nao precisa de detalhes, faça partes a parte de forma 
 * que foi solicitado para chegar no resultado final
 * 
 * 
 */

 const getNota = aluno=> aluno.nota
 const soma = (total,atual)=>total+atual
 const total2 = alunos.map(getNota).reduce(soma)
 console.log(total2/alunos.length)