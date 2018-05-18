console.log(this===global)//false
console.log(this===module)//false
console.log(this===module.exports)//true
console.log(this===exports)//true

function logThis(){
    console.log('Dentro de uma função this aponta para global...')
    console.log(this===global)//true
    console.log(this===module)//false
    console.log(this===module.exports)//false
    console.log(this===exports)//false
}

logThis()