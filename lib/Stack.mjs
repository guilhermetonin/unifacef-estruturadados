export default class Stack {
    #data // vetor privado

    constructor() {
        this.#data = [] // inicializa com um vetor vázio
    }

    // método que insere um elemento no final do vetor
    push(val) {
        this.#data.push(val)
    }

    // método que remove e retorna o elemento do final do vetor
    pop() {
        return this.#data.pop()
    }

    // método para consultar o final do vetor sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // método que verifica se o vetor está vázio
    get isEmpty() {
        return this.#data.length === 0
    }

    // método para vizualizar o vetor completo
    print() {
        return JSON.stringify(this.#data)
    }

}