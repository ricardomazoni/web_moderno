let foo = [,,1, 2, 3, 0].fill(7, 3) // Apartir da 3º(indice de valor = 2) posição coloque 7 em todas as posições da array
console.log(foo)
let bar = 0
foo.forEach((n = 2) => bar -= -n )
console.log(bar)