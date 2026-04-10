import Queue from "./Queue.mjs";

let filaAtendimento = new Queue()

filaAtendimento.enqueue("Miguel") // 1
filaAtendimento.enqueue("Fernando") // 2
filaAtendimento.enqueue("Gabriel") // 3
filaAtendimento.enqueue("Guilherme") // 4

console.log("\nFila: " + filaAtendimento.print())
console.log("Contagem de operações: " + filaAtendimento.operationCount)

filaAtendimento.dequeue() // 5
filaAtendimento.dequeue() // 6

console.log("\nFila: " + filaAtendimento.print())
console.log("Contagem de operações: " + filaAtendimento.operationCount)
