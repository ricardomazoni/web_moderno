let x = 100
let y = 200
let z = 300
results = []
[x, y, z].forEach((n = 50) => {
results.push((typeof +n.toString()) + '|' + (n++ / 2))
return n * 2
})
console.log(results.join(' '))