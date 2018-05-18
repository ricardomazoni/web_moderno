const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

// interpolacao
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao,template)

//expressoes
console.log(`1 + 1 = ${1+1}`)
const up = texto => texto.toUpperCase()
console.log(`Olá ${up('tudo bem !!!!')}`)