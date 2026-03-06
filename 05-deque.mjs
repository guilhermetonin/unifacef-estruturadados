import Deque from "./lib/Deque.mjs";
// DEQUE permite adicionar elementos no ínicio e no final

let listaCompras = new Deque()
console.log("A lista está vázia? " + listaCompras.isEmpty())

// produtos alimenticios -> início
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Café")

// produtos de limpeza -> final
listaCompras.insertBack("Sabão")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água Sanitária")

// produtos alimenticios
listaCompras.insertFront("Açúcar")
listaCompras.insertFront("Manteiga") // primeiro elemento

// produtos de limpeza
listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador") // último elemento

// remoção
let removido = listaCompras.removeFront() // remove o primeiro elemento
console.log("Qual foi o produto removido? " + removido) // (manteiga)
console.log(listaCompras.print())

// consulta
let primeiro = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()
console.log("Peek Front: " + primeiro)
console.log("Peek Back: " + ultimo)