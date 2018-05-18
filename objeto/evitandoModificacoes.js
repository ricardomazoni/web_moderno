// 
/**
 * Object.preventExtensions
 * previ extensoes do objeto
 * nao consegui add novos atributos
 */

 const produto = Object.preventExtensions({
     nome: 'Quaquer',preco:1.99, tag: 'promocao'
 })
 console.log('Extensível:',Object.isExtensible(produto))
 produto.nome = "Borracha"
 produto.descricao = "Borracha escolar" // nao deixou add
 delete produto.tag
 console.log(produto)

 /**
  * Object.seal
  * nao permite add e delete
  * consegue somente alterar
  */
 
  const pessoa = {nome: 'Juliana',idade: 35}
  Object.seal(pessoa)
  console.log('Selado: ', Object.isSealed(pessoa))

  pessoa.sobrenome = 'Silva'
  delete pessoa.nome
  pessoa.idade = 29
  console.log(pessoa)