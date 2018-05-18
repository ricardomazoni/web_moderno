
console.log(soma(3,5))

/**
 * function declaration
 * vantagem vc pode chamar antes 
 * pois ao carregar a .js as funcoes
 * sao carregadas primeiro
 * 
 */

 

function soma(x,y){
    return x + y
}

//function expression
const sub = function(x,y){
    return x -y
}

/**
 * named function expression
 */

 const mult = function mult(x,y){
     return x * y
 }