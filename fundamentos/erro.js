function tratarErroELancar(erro){
    throw "teste"
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase())
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

let obj = {name:'Ricardo'}
imprimirNomeGritado(obj)

obj = {ppppp:'Ricardo'}
imprimirNomeGritado(obj)
