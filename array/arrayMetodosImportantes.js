const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
/**
 * Metodo pop
 * exclui o ultimo item o array
 * 
 */
 pilotos.pop()
 console.log(pilotos)

 /**
  * push
  * adiciona na proxima posicao
  * do array
  *
  */

pilotos.push('Versta')
console.log(pilotos)

  /**
   * shift 
   * Remove da primeira posicao
   */
pilotos.shift()
console.log(pilotos)

  /**
   * unshift
   * add na primeira posição
   */

pilotos.unshift('Hamilton')
console.log('Unshit'+pilotos)

  /**
   * splice add e remove elementos
   */
// Add 
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remove
pilotos.splice(3,1)
console.log(pilotos)

// Criando novo array apartir de uma posicao
//Slice pega posicao do array
//Splice add e remove do array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)




