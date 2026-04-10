/****************************************************************
Exercício 3: Deque com Capacidade Limitada
Desafio: Modifique a classe Deque para definir um tamanho máximo e impedir
que novos elementos sejam inseridos quando o limite for atingido.
Regras:
1. O tamanho máximo da deque deve ser passado no construtor.
2. Se o limite for atingido, os métodos insertFront() e insertBack() devem exibir
uma mensagem de erro e impedir a inserção.
3. Teste essa funcionalidade simulando um deque com capacidade de apenas 5
elementos.

*/

export default class Deque {
    #data       // Vetor privado
    #limit

    constructor(limit) {
        this.#data = []     // Vetor vazio
        this.#limit = limit
    }

    #checkLimit(val) {
        if (this.#data.length >= this.#limit) {
            console.log(`Impossível adicionar '${val}'. Capacidade máxima atingida.`)
            return false
        } else {
            return true
        }
    }


    // Método para inserção no início da estrutura
    insertFront(val) {
        if (this.#checkLimit(val)) {
            this.#data.unshift(val)
        }
    }

    // Método para inserção no final da estrutura
    insertBack(val) {
        if (this.#checkLimit(val)) {
            this.#data.push(val)
        }
    }

    // Método para remoção do início da estrutura
    removeFront() {
        return this.#data.shift()
    }

    // Método para remoção do final da estrutura
    removeBack() {
        return this.#data.pop()
    }

    // Método para consultar o início da estrutura
    peekFront() {
        return this.#data[0]
    }

    // Método para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se o deque está ou não vazio
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime o deque (para efeitos de depuração)
    print() {
        let output = '[ '
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== '[ ') output += ', '
            output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }
}
