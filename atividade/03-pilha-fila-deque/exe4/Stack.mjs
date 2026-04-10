/*
Exercício 4: Pilha com Capacidade Máxima
Desafio: Modifique a classe Stack para ter um limite máximo de elementos.
Regras:
1. O tamanho máximo da pilha deve ser definido no construtor.
2. Se a pilha atingir o limite, o método push() deve exibir uma mensagem de
erro e impedir a inserção.
3. Teste essa funcionalidade simulando uma pilha de desfazer ações em um
editor de texto.
*/
export default class Stack {
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

    // Método para inserção no vetor
    push(val) {
        if (this.#checkLimit(val)) {
            this.#data.push(val)
        }
    }

    // Método para remoção do vetor
    pop() {
        return this.#data.pop()
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////