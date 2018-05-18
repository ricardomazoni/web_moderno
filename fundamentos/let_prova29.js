//const fn = (x, y = 6) => x + y

const fn = function(x,y=6){
    console.log(x,y)
    return x+y
}

let foo = fn(...[1, 2, 3, 4, 5])
console.log(foo)
