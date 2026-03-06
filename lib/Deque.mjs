export default class Deque {
    #data // vetor privado

    constructor() {
        this.#data = [] // inicializa com um vetor vázio
    }

    // método que insere um elemento no começo do vetor
    insertFront(val) {
        this.#data.unshift(val)
    }

    // método que insere um elemento no final do vetor
    insertBack(val) {
        this.#data.push(val)
    }

    // método que remove e retorna o elemento do começo do vetor
    removeFront() {
        // shift() - remove o elemento e puxa os outros para frente
        return this.#data.shift(0)
    }

    // método que remove e retorna o elemento do final do vetor
    removeBack() {
        return this.#data.pop()
    }

    // método para consultar o começo do vetor sem remover o elemento
    peekFront() {
        return this.#data[0]
    }

    // método para consultar o final do vetor sem remover o elemento
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    // método que verifica se o vetor está vázio
    isEmpty() {
        return this.#data.length === 0 ? "Sim, está vázia." : "Não." 
        // operador ternário
    }

    // método para vizualizar o vetor completo
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i+1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }
}