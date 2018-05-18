
/**
 * Prototype 
 * é um prototipo da função, onde cada function tem
 * ao ser criada 
 * quando  objeto possui os seus atributos
 * a ideia é referenciar atraves __proto__ o objeto 
 * prototipado esse é conceito de herança em js
 */

const ferrari ={
    modelo: 'F40',
    velMax: 324
}

const volvo ={
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__=== Object.prototype)
console.log(ferrari.__proto__=== volvo.__proto__)

console.log(Object.prototype)
console.log(typeof volvo)

