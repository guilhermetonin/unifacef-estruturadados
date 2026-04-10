/*
Exercício 2: Pilha com Histórico de Remoções (Stack)
Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que
foram removidos (pop).
Regras:
1. Crie um array privado #historyData para armazenar os elementos removidos.
2. Adicione um método history() para retornar os elementos que já foram
retirados da pilha.
3. Teste essa funcionalidade simulando uma pilha de navegação em um
navegador (ex: páginas visitadas e removidas).
*/
export default class Stack {
    #data // Vetor privado
    #historyData

    constructor() {
        this.#data = [] // Vetor vazio
        this.#historyData = []
    }

    // Método para inserção no vetor
    push(val) {
        this.#data.push(val)
    }

    // Método para remoção do vetor
    pop() {
        this.#historyData.push(this.#data.pop())
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
    
    history() {
        return JSON.stringify(this.#historyData)
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////