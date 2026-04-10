import LinkedList from "./LinkedList.mjs"

let lista = new LinkedList()

lista.insert(0, "Item1")
lista.insert(1, "Item2") 
lista.insert(2, "Item3")

let array = JSON.stringify(lista.toArray())
console.log("\nLista atual como array: " + array)