
/** 
 * this nesse contexto lexico na vai variar
 * this não varia porque aponta para 
 * function Pessoa
 * 
*/

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa