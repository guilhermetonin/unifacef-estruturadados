class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // início da lista (cabeça)
    #tail // fim da lista (calda)
    #count // qtde de nodos da lista
    
    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // confere se a lista encadeada está vázia
    get isEmpty() {
        return (this.#count === 0)
    }

    // retorna a quantidade de elementos na lista
    get count() {
        return (this.#count)
    }
    
    // método para inserir em qualquer posição
    insert(pos, val) {
        // cria um nodo para armazenar o valor escolhido
        const inserted = new Node(val)

        // 1° a lista está vázia
        if (this.isEmpty()) {
            this.#head = inserted
            this.#tail = inserted
        } 
        
        // 2° lista não vázia, inserção na primeira posição
        else if (pos === 0) {
            this.#head = inserted
            inserted.next = this.#head
        }
        
        // 3° inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        this.#count++
    }

}