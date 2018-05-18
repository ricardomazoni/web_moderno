function rand({min=0,max=1000}){
    const valor  = Math.random()*(max-min)+min
    return Math.floor(valor)
}

// gerando valores randomincos entre 40 e 50
// como o parametro é o operador destructuring 
// é so passar o obj
const obj = {max:50, min:40}
console.log(rand(obj))

// é possivel tambem passar somente um valor que esta entre o que
// definido no min e max no parametro
console.log(rand({min:950}))