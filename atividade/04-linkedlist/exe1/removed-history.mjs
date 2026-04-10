import LinkedList from "./LinkedList.mjs"

let lista = new LinkedList()

lista.insert(0, "Item1")
lista.insert(1, "Item2")
lista.insert(2, "Item3")

console.log("\nLista atual: " + lista.print())
console.log("Histórico de remoções: " + lista.history())

lista.remove(1)

console.log("\nLista após remoção: " + lista.print())
console.log("Histórico de remoções: " + lista.history())


