const produtos = [
    {nome:'Notebook',preco:2499, fragil: true},
    {nome:'iPad Prod',preco:4199, fragil: true},
    {nome:'Copo de vidro',preco:12.49, fragil: true},
    {nome:'Codo de plastico',preco:18.99, fragil: false}

]
/*
console.log(produtos.filter(function(e){
    return e.preco>2000
}))
*/

const isFragil = function(e){
    if (e.fragil)
        return true

}
const isFragil2 =produto=> produto.fragil
const caro =produto=> produto.preco>=500

console.log(produtos.filter(isFragil2).filter(caro))