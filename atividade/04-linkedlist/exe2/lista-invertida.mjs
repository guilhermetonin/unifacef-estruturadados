import LinkedList from "./LinkedList.mjs"

let lista = new LinkedList()

lista.insert(0, "Item1")
lista.insert(1, "Item2")
lista.insert(2, "Item3")

console.log("\nLista antes de inverter: " + lista.print())

lista.reverse()
console.log("\nLista após inversão: " + lista.print())