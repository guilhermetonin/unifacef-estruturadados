import LinkedList from "./lib/LinkedList.mjs";

// cria uma instância da LinkedList
const lista = new LinkedList()

// verifica se a lista está vázia
console.log("\nA lista está vázia?", lista.isEmpty ? "Sim, está vázia" : "Não.")

// insere elementos
lista.insert(0, "Onix") // primeiro elemento (será o head e o tail)
lista.insert(0, "SW4") // insere na posição 0 (será somente o head)
console.log("\nLista: " + lista.print()) // Head = 'SW4' | Tail = 'Onix'

// insere elementos
lista.insert(2, "Opala")
lista.insert(3, "Chevette")
lista.insert(4, "Maverick")
console.log("\nElementos adicionados: " + lista.print())

// insere o elemento exatamente na posição 3, empurra o outro elemento
lista.insert(3, "Brasília")
console.log("\nInsere na posição 3: " + lista.print())

// utiliza os atalhos de inserção
lista.insertHead("Gol Bola") // será o novo head
lista.insertTail("Fox") // será o novo tail
console.log("\nHead e Tail: " + lista.print()) // empurra os outros elementos

// remove o elemento na posição 4 e retorna o seu valor
let removido = lista.remove(4)
console.log("\nRemovido: " + removido)
console.log("\nRemoção na posição 4: " + lista.print())

// procura o índice do elemento escolhido
let idxGol = lista.indexOf("Gol Bola")
let idxOnix = lista.indexOf("Onix")
console.log("\nGol Bola (index= " + idxGol + ")")
console.log("Onix (index= " + idxOnix + ")")

// mostra o valor do elemento com base no índice escolhido
let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
let pos2 = lista.peek(2)
console.log("\nBusca na posição 0 = " + pos0)
console.log("Busca na posição 1 = " + pos1)
console.log("Busca na posição 2 = " + pos2)