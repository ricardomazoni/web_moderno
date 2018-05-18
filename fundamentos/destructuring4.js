function rand([min=0,max=1000]){
    /*
    * Se min for maior atraves do destructuring
    * invertera os valores onde max ira para min 
    * e vicce e versa
    * O primeiro array é o destructuring o segundo array é o valor do novo array sendo passado
    *  */
    if(min>max) [min,max]=[max,min]
        const valor = Math.random() * (max-min)+min
        /**
         * 
         * Math.floor - arredonda pra baixo
         * Math.ceil - arredonda pra cima
         * 
         */
        return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
//passando somente o maximo
console.log(rand([,10]))
//pega os valores padrão [min=0,max=1000]
console.log(rand([]))
//gerando erro por não ter passar parametro
console.log(rand())

