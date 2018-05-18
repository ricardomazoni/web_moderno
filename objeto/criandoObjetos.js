// usando a notacao literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

//Funcoes construtoras

function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto =()=>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2998.99,0.25)

console.log('Descontos : ' + p1.nome + " - " + p1.getPrecoComDesconto()  )
console.log('Descontos : ' + p2.nome + " - " + p2.getPrecoComDesconto()  )

// Funcao factory  - Padrao de projetos

function criarFuncionarios(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30 * (30-faltas))
        }
    }
}

const f1 = criarFuncionarios('Joao',7980,4)
const f2 = criarFuncionarios('Maria',11400,1)
console.log(f1.nome + " - " +  f1.getSalario(),f2.nome +" - " +f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
filha['sobrenome'] = 'Da silva'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse(`{"info":"Sou um Json"}`)
console.log(fromJSON, fromJSON.info)

