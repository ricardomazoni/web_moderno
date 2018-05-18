/**
 * Capturando entrada e saida do node que esta sendo passado
 * por parametro no terminal
 * stdout -> saida padrao
 * stdin -> quando aperta a tecla [enter]
 */

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anonimo !\n')

}else{
    process.stdout.write('Inform seu nome:')
    process.stdin.on('data',data=>{
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome} !!\n`)
    })
}

process.exit