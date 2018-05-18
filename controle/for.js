let contador = 1

while(contador <=10){
    console.log(`contador = ${contador}`)    
    contador++
}

for(let i =1; i<=10;i++){
    console.log(`i = ${i}`)
}

const notas =[6.7,7,8,9,5]

for(let i=0;i<notas.length;i++){
    console.log(`notas: ${notas[i]}`)
}

for(let i in notas){
    console.log(i, notas[i])    
}

//navegar todos os atributos

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}