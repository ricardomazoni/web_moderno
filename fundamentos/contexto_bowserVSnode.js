//variavel local
let a =3
//variavel local
global.b = 123
// varivel global 
this.c = 456
this.d = false
this.e = 'texto'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports)
console.log(module.exports===this)

/**
 * Se não passar um tipo para variavel ela sera GLOBAL
 * NAO FAÇA ISSO
 */

 abc=123
 console.log(global.abc)