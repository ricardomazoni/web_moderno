function Pessoa(){
    this.idade = 0

    /**
     * usando bind para referencia o this.idade 
     */
    /*
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
    */

    /**
     * usando const para referenciar o objeto 
     * e chamar this.idade
     * acessando o atributo atraves da const
     */

     const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
     
}

new Pessoa