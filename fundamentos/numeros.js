// Nao ha numeros flutuantes todos sao numericos 
const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1,peso2);

// para especificar o numero é inteiro
// se for 1.1 nao sera inteiro
console.log(Number.isInteger(peso1));

// verificando valores flotoantes

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1+peso2);

// toFixed limita as casas decimais
// toString transforma em binario

console.log(media.toFixed(2));
