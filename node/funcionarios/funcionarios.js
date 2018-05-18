
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response=>{
    const funcionarios = response.data
   // console.log(funcionarios)

    const pais =funcionarios=> funcionarios.pais=='China'
    const genero =funcionarios=> funcionarios.genero=='F'  

    const menorSalario = function(func,funcAtual){
        return func.salario > funcAtual.salario ?func: funcAtual
    }

    //console.log(funcionarios)
    const sal = funcionarios=> funcionarios.salario==menorSalario
    const func = funcionarios
        .filter(pais)
        .filter(genero)
        .reduce(menorSalario)


    console.log(func)
    
})

