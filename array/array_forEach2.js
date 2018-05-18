const aprovados = ['Agatha','Aldo','Daniel','Raquel']

// forma simples pegando o objeto aprovados.forEach
//aprovados.forEach2 = aprovados.forEach 

// outra forma
Array.prototype.forEach2 = function(callback){
    for(let i =0; i< this.length; i++){
        callback(this[i],i,this)
    }
}

aprovados.forEach2(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
});
