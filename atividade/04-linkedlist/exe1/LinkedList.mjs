/*
Exercício 1: Histórico de Remoções
Modifique a LinkedList para armazenar um histórico dos elementos removidos.
Regras:
1. Crie uma estrutura #removedHistory para armazenar os valores dos nós removidos.
2. Sempre que um valor for removido (remove()), adicione-o ao histórico.
3. Crie um método history() que retorne os elementos removidos.
4. Teste com inserções e remoções, e exiba o histórico final.
*/

/* Classe que representa a unidade de armazenamento da lista encadeada */
class Node {
    constructor(val) {
        this.data = val     // Informação relevante para o usuário
        this.next = null    // Ponteiro para o próximo nodo da sequência
    }
}

/* Classe que representa a estrutura de dados lista encadeada */
export default class LinkedList {
    #head       // Início da lista (cabeça)
    #tail       // Fim da lista (cauda)
    #count      // Quantidade de nodos da lista
    #removedHistory

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
        this.#removedHistory = []
    }

    history() {
        if (this.#removedHistory.length === 0) {
            return "Nenhuma remoção ainda."
        }
        return this.#removedHistory
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {

        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        // 1º caso: a lista está vazia
        if (this.isEmpty) {
            this.#head = inserted   // 1º nodo
            this.#tail = inserted   // último nodo            
        }

        // 2º caso: lista não vazia, inserção na primeira posição
        else if (pos === 0) {
            // O sucessor do nodo inserido será o nodo que atualmente
            // ocupa a primeira posição da lista
            inserted.next = this.#head
            // O início da lista passa a ser o novo nodo inserido
            this.#head = inserted
        }

        // 3º caso: inserção no final da lista
        else if (pos >= this.#count) {
            // O atual último nodo da lista passa a apontar para o inserido
            this.#tail.next = inserted
            // O último nodo passa a ser o nodo inserido
            this.#tail = inserted
        }

        // 4º caso: posição intermediária
        else {
            // Nodo da posição ANTERIOR à de inserção
            let before = this.#head     // Começa pelo primeiro nodo

            // Percurso até a posição ANTERIOR à de inserção,
            // saltando de nodo em nodo por meio do ponteiro next
            for (let i = 1; i < pos; i++) before = before.next

            // Nodo da posição POSTERIOR à de inserção
            let after = before.next

            // O sucessor do nodo inserted passa a ser o nodo after
            inserted.next = after

            // O sucessor do nodo before passa a ser o nodo inserted
            before.next = inserted
        }

        this.#count++

    }

    // Método para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    // Método para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // Método para remoção de um nodo na lista
    remove(pos) {
        // 1º caso: a lista está vazia ou a posição informada está
        // fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do início da lista
        if (pos === 0) {
            removed = this.#head    // Marca o primeiro nodo para remoção
            // O início da lista passa a ser o nodo seguinte
            this.#head = this.#head.next

            // Atualizando o tail em caso de remoção do único nodo restante
            if (this.#count === 1) this.#tail = null
        }

        // 3º caso: remoção de nodo intermediário ou final
        else {
            let before = this.#head
            // Percorre a lista até a posição ANTERIOR à re remoção
            for (let i = 1; i < pos; i++) before = before.next

            // O nodo removido será o seguinte
            removed = before.next

            let after = removed.next

            // O nodo anterior ao removido passa a apontar para o nodo
            // posterior ao removido
            before.next = after

            // Atualiza o tail em caso de remoção do último nodo
            if (pos === this.#count - 1) this.#tail = before
        }

        // Decrementa contagem de nodos da lista
        this.#count--

        // Retorna a informação armazenada no nodo removido
        this.#removedHistory.push(removed.data)
        return removed.data
    }

    // Método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    // Método para remover o último nodo da lista (atalho)
    removeTail() {
        return this.remove(this.#count - 1)
    }

    // Método para verificar a posição da primeira ocorrência de um valor na lista
    // Retorna:
    // 1) Caso o valor exista, a posição onde ele foi encontrado
    // 2) Caso o valor não exista, -1
    indexOf(val) {

        // 1º caso: lista vazia
        if (this.isEmpty) return -1

        let node = this.#head

        for (let i = 0; i < this.#count; i++) {
            // Se o nodo contém o valor procurado, retorna a posição do nodo
            if (node.data === val) return i
            node = node.next
        }

        // Se chegamos ao final da lista sem encontrar o valor, retornamos -1
        return -1
    }

    // Método que retorna (sem remover) um nodo da lista, de acordo com sua posição
    peek(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined

        // 2º caso: busca sequencial
        let node = this.#head

        for (let i = 0; i < pos; i++) node = node.next

        return node.data
    }

    // Método para retornar (sem remover) o valor do primeiro nodo da lista (atalho)
    peekHead() {
        return this.peek(0)
    }

    // Método para retornar (sem remover) o valor do último nodo da lista (atalho)
    peekTail() {
        return this.peek(this.#count - 1)
    }

    // Método para exibição da lista encadeada
    print() {
        let output = '( '
        let node = this.#head
        for (let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }
}