/****************************************************************
Exercício 5: Deque com Elementos Únicos
Desafio: Modifique a classe Deque para não permitir valores duplicados.
Regras:
1. Antes de adicionar um novo valor (insertFront ou insertBack), verifique se ele
já está na deque.
2. Se o valor já existir, exiba uma mensagem de erro e ignore a inserção.
3. Teste essa funcionalidade simulando um deque de itens únicos em um
carrinho de compras.
*/

export default class Deque {
    #data       // Vetor privado

    constructor() {
        this.#data = []     // Vetor vazio
    }

    #indexOf(val) {
        if (this.isEmpty) {
            return true
        }
        for (let i = 0; i < this.#data.length; i++) {
            if (val === this.#data[i]) {
                console.log(`O item '${val}' já foi adicionado ao carrinho.`)
                return false
            }
        }
        return true
    }

    // Método para inserção no início da estrutura
    insertFront(val) {
        if (this.#indexOf(val)) {
            this.#data.unshift(val)
        }
    }

    // Método para inserção no final da estrutura
    insertBack(val) {
        if (this.#indexOf(val)) {
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
