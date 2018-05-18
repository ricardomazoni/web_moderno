/**
 * 
 * resolve só aceita um parametro
 * 
 */

function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(frase) // chama o then
        }, segundos*1000);
    })
}
/**
 * a funcao concatena 'Que legal !' com '?!?'
 * a chamada lala é chamada onde o resolve passa 
 * a frase para console.log no conteudo de lala
 */
falarDepoisDe(3,'Que legal !')
    .then(frase=> frase.concat('?!?'))
    .then(lala=>console.log(lala))