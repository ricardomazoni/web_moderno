// Cadeia de protótupos(prototype chain)

const avo = {attr1: 'A'}
const pai = {__proto__: avo,attr2: 'B'}
const filho = {__proto__: pai,attr3: 'C'}

/**
 * atraves do prototype é possível 
 * acessar o atributo do avo
 */
console.log(filho.attr1)

const carro = {
    velAtual:0,
    velMax:200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowind - sobreamento
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

/**
 * Object.setPrototypeOf(ferrari,carro)
 *  - estabelendo a relacao de heranca 
 * entre ferrari pertence a carro
 * - ferrari é o protoripo 
 * - carro o objeto modelo
 */
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)
volvo.aceleraMais(100)
console.log(volvo.status())



