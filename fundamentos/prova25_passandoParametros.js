let [a,b = 2,c,d = 5,] = [1,2,3,4,6]
console.log(a,b,c,d)

function f (x, ...y) {
    console.log(x,y)
return x * y.length
}
console.log(f(3), f(3, a, b), f(3, a, b, c), f(3, a, b, c, d))