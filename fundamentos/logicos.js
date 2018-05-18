function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv50 = !!(trabalho1 ^ trabalho2)// betwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}
}

console.log(compras(true,false))

console.log(compras(true))