import Stack from "./lib/Stack.mjs"
// PILHA usa o conceito de LIFO (Last In, First Out)
// Último a entrar -> Primeiro a sair

let pilha = new Stack()
console.log(pilha.print())
console.log("Está vazia?",pilha.isEmpty)

pilha.push(35)
pilha.push(77)
pilha.push(19)

console.log(pilha.print())
console.log("Está vazia?",pilha.isEmpty)

let removido = pilha.pop()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())