const functs =[]

for(let i=0; i<10;i++){
    functs.push(function(){
        console.log(i)

    });
    functs[i]()

}
/*
 Com let o mesmo guarda na array corretamente
 conceito clowser
 Dependendo do loop let é melhor sendo usado
*/
functs[2]()
functs[8]()