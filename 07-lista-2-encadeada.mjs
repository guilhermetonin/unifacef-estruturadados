import DoublyLinkedList from "./lib/DoublyLinkedList.mjs";

// cria uma instância da DoublyLinkedList
const lista = new DoublyLinkedList()

// exibe a lista (vazia no início)
console.log(lista.print())

// verifica se a lista está realmente vazia (get isEmpty)
console.log("Lista está vázia?", lista.isEmpty ? "Está vázia" : "Não está vázia")

// insere elementos na posição 0
lista.insert(0, "fiat uno") // head e tail ao mesmo tempo
lista.insert(0, "corsa 99") // novo head, empurrando o 'fiat uno' para frente

// mostra o estado atual da lista
console.log(lista.print())

// remove o head e guarda o valor retornado
let removido = lista.remove(0)
console.log(`\nremovido: ${removido} \nlista após remoção: ${lista.print()}`)

// insere um elemento no final da lista (tail)
lista.insert(9, "onix") 

// insere um novo elemento no topo da lista (head)
lista.insert(0, "civic si")

// mostra o estado atual da lista
console.log(lista.print())

// espia quem é o primeiro (head) e o último (tail)
let head = lista.peekHead()
let tail = lista.peekTail()
console.log(`\nhead: ${head} \ntail: ${tail}`)