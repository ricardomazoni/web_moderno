const contadoraA = require('./instanciaNova')
const contadoraB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')
const contadorD = require('./instanciaUnica')

contadoraA.inc()
contadoraB.inc()

console.log(contadoraB.valor)
console.log(contadoraA.valor)