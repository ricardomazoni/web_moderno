const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
/**
 * ira imprimir Global pois no contexto atual
 * o java script ja carrega as funcoes e as variaveis
 * 
 */
exec()


