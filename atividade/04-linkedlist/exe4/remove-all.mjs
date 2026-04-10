import LinkedList from "./LinkedList.mjs"

let lista = new LinkedList()

lista.insert(0, "Item1")
lista.insert(1, "Item2") 
lista.insert(2, "Item1")
lista.insert(3, "Item3")
lista.insert(4, "Item1")

console.log("\nLista antes da remoção de 'Item1': " + lista.print())

lista.removeAll("Item1")
console.log("\nLista após remoção de 'Item1': " + lista.print())