// Somente em cima de valores
/**
 * in retorna chave
 * of retorna valores
 */

for(let letras of "Cod3er"){
    console.log(letras)
}

const assuntosEcma = ['Map','Set','Promise']

for(let i in assuntosEcma){
    console.log(i)

}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promise',{abordado: false}]   
])
// Retorna chave e valor
for (let assunto of assuntosMap){
    console.log(assunto)
}
for (let assunto of assuntosMap.keys()){
    console.log(assunto)
}
for (let assunto of assuntosMap.values()){
    console.log(assunto)
}

for (let [ch,vl] of assuntosMap){
    console.log(ch,vl)
}