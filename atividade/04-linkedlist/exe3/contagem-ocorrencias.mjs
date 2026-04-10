import LinkedList from "./LinkedList.mjs"

let lista = new LinkedList()

lista.insert(0, "Item1")
lista.insert(1, "Item1") 
lista.insert(1, "Item1") // 3 ocorrências

lista.insert(2, "Item2") // 1 ocorrência
lista.insert(3, "Item3") // 1 ocorrência

console.log("Lista atual" + lista.print())

console.log("Ocorrências de 'Item1': " + lista.countOccurrences("Item1"))
console.log("Ocorrências de 'Item2': " + lista.countOccurrences("Item2"))