const functs =[]

for(var i=0; i<10;i++){
    functs.push(function(){
        console.log(i)

    });
    functs[i]()

}
// Como var não tem escopo de funcao ele não 
// ira guardar na posicao do array e sim 
//o último numero para todos.. 
//isso ocorre com var

functs[2]()
functs[8]()