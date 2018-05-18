const aprovados = ['Agatha','Aldo','Daniel','Raquel']
aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
    //console.log((indice+1)+')', nome)
});
aprovados.forEach(nome=>
    console.log(nome)
    //console.log((indice+1)+')', nome)
);

const exibirAprovados = (aprovado, indice)=>console.log(aprovado,indice)

aprovados.forEach(exibirAprovados)