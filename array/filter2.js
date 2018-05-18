Array.prototype.filter2 = function(callback){
    const newArray=[]
    for(let i = 0; i < this.length;i++){
        if (callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray    
    
}
const produtos = [
    {nome:'Notebook',preco:2499, fragil: true},
    {nome:'iPad Prod',preco:4199, fragil: true},
    {nome:'Copo de vidro',preco:12.49, fragil: true},
    {nome:'Codo de plastico',preco:18.99, fragil: false}

]

const isFragil = function(e){
    if (e.fragil)
        return true

}
const isFragil2 =produto=> produto.fragil
const caro =produto=> produto.preco>=500

console.log(produtos.filter2(isFragil2).filter2(caro))