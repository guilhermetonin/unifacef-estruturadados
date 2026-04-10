import Deque from "./Deque.mjs";

let deque = new Deque(5)

deque.insertFront("Pessoa 1")
deque.insertFront("Pessoa 2")
deque.insertFront("Pessoa 3")
deque.insertFront("Pessoa 4")
deque.insertFront("Pessoa 5")

console.log("\nDeque: " + deque.print())

deque.insertBack("Pessoa 6") // testa erro de capacidade máxima

console.log("\nDeque: " + deque.print())