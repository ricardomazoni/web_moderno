let aprovados =  new Array('Ana','Bia','Carlos')

aprovados = ['Joao','Maria','Ana']
aprovados.sort()
delete aprovados[1]
aprovados = ['Bia','Carlos','Ana']

aprovados.splice(2,1,'Elemento3','Elemento4')

console.log(aprovados)