export default class Queue {
    #data // vetor privado
    
    constructor() {
        this.#data = [] // inicializa com um vetor vázio
    }

    // método que insere um elemento no final do vetor
    enqueue(val) {
        this.#data.push(val)
    }

    // método que remove e retorna o elemento do começo do vetor
    dequeue() {
        // shift() - remove o elemento e puxa os outros para frente
        return this.#data.shift()
    }

    // método para consultar o início da fila sem remover o elemento
    peek() {
        return this.#data[0]
    }

    // método que verifica se o vetor está vázio
    get isEmpty() {
        return this.#data.length === 0
    }

    // método para vizualizar o vetor completo
    print() {
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