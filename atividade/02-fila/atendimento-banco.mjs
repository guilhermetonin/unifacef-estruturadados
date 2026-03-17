/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    */
// GUILHERME TONIN JORGE | SISTEMAS DE INFORMAÇÃO

// importa a classe Queue
import Queue from "./lib/Queue.mjs"

// cria um objeto filaBanco
let filaBanco = new Queue()

// insere os clientes na ordem correta
filaBanco.enqueue(101)
filaBanco.enqueue(102)
filaBanco.enqueue(103)
filaBanco.enqueue(104)
filaBanco.enqueue(105)

// imprime a fila antes do atendimento
console.log("\nFila de atendimento: " + filaBanco.print())

// o primeiro cliente foi chamado e atendido
// remove o cliente da fila e imprime o nome dele
let atendido = filaBanco.dequeue() 
console.log("Atendido: Cliente " + atendido)

// imprime a fila após a remoção
console.log("\nFila de atendimento: " + filaBanco.print())

// dois novos clientes pegaram senha: Cliente 106 e Cliente 107
// adiciona eles à fila
filaBanco.enqueue(106)
filaBanco.enqueue(107)

// imprime a fila após as alterações
console.log("\nFila de atendimento: " + filaBanco.print())

// imprime o próximo cliente a ser atendido
let proximo = filaBanco.peek()
console.log("Próximo a ser atendido: Cliente " + proximo)

// imprime a fila atualizada
console.log("\nFila de atendimento: " + filaBanco.print())