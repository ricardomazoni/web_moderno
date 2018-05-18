const foo = {}
const fn = valor => foo.bar = valor
fn(2) && fn(1) && fn(0) && fn(3)
console.log(foo.bar)
