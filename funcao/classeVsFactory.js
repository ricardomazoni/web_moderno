class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Deseja falar com ${this.nome} `)
    }
}

const nome = new Pessoa('Ricardo')
nome.falar()

const pessoa = nome=>{
    return{
        falar:()=>console.log(`Meu nome é ${nome}`)
    }
}
pessoa('Joao').falar()