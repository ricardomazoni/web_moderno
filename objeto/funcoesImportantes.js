const pessoa = {
    nome: 'Ricardo',
    idade: 34,
    peso:13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(
    ([chave,valor])=>{
        console.log(`${chave},${valor}`)
    }
);

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true, // permite que o campo seja listado
    writable: false, // nao permite editar
    value:'01/01/2019' // valor default
})
console.log(pessoa.dataNascimento)

/**
 *  Object.assign (ECMAScript 2015) 
 *  Concatena varios objetos em 1
*/

const dest ={a:1}
const o1 ={b:2}
const o2 ={c:3}
const o3 ={d:4, a:5}
const obj = Object.assign(dest,o1,o2,o3)
console.log(dest)
console.log(obj)