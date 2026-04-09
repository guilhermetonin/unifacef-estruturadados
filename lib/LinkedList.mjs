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
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2° lista não vázia, inserção na primeira posição
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }

        // 3° inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4° inserção intermediário
        else {
            let before = this.#head
            for (let i = 1; i < pos; i++) {
                before = before.next
            }
            let after = before.next
            inserted.next = after
            before.next = inserted
        }

        this.#count++
    }

    // método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    // método para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // método para remoção de um nodo na lista
    remove(pos) {

        // 1° a lista está vázia ou a posição esta fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        let removed

        // 2° remoção no início da lista
        if (pos === 0) {
            removed = this.#head
            this.#head = this.#head.next

            if (this.#count === 1) {
                this.#tail = null
            }
        }

        // 3° remoção do nodo intermediário ou final
        else {
            let before = this.#head

            for (let i = 1; i < pos; i++) {
                before = before.next
            }

            removed = before.next
            let after = removed.next
            before.next = after

            // remoção no final, atualiza o tail
            if (pos === this.#count - 1) {
                this.#tail = before
                before.next = null
            }
        }

        this.#count--
        return removed.data
    }

    // método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    // método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1)
    }

    // método para encontrar o índice do valor escolhido
    indexOf(val) {

        // lista está vázia
        if (this.isEmpty) {
            return -1
        }

        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            if (node.data === val) {
                return i
            }
            node = node.next
        }
        // não foi encontrado o (val)
        return -1
    }

    // método para mostrar o valor pelo índice escolhido
    peek(pos) {

        // 1° a lista vázia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        // 2° busca sequencial
        let node = this.#head

        for (let i = 0; i < pos; i++) {
            node = node.next
        }
        return node.data
    }

    // método para mostrar o primeiro nodo da lista (atalho)
    peekHead() {
        return this.peek(0)
    }

    // método para mostrar o último nodo da lista (atalho) 
    peekTail() {
        return this.peek(this.#count - 1)
    }

    // método para impressão da lista completa
    print() {
        let output = "( "
        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            if (output !== "( ") {
                output += ", "
            }
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.count}`
        return output
    }
}