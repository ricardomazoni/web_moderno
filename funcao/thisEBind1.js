const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() // funciona corretamente
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e OO

/** 
 * bind que seja chamado o this
 * amarra o determinado o objeto
 * referencia o this para o bind
 * o resultado armazena na variavel
 * 
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

