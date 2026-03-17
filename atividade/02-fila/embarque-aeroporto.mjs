/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */
// GUILHERME TONIN JORGE | SISTEMAS DE INFORMAÇÃO

// importa a classe Queue
import Queue from "./lib/Queue.mjs"

// cria o objeto filaAeroporto
let filaAeroporto = new Queue()

// insire os passageiros na fila
filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

// imprime a fila antes do início do embarque
console.log("\nFila de passageiros: " + filaAeroporto.print())

// remove o próximo passageiro
let embarque = filaAeroporto.dequeue()

// imprime o nome dele
console.log("Foi chamado para o embarque: " + embarque)

// imprime a fila após a remoção
console.log("\nFila de passageiros: " + filaAeroporto.print())

// adiciona 3 novos passageiros
filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

// imprime a fila após as alterações
console.log("\nFila de passageiros: " + filaAeroporto.print())

// checa qual é próximo passageiro a embarcar
let proximo = filaAeroporto.peek()

// imprime nome do próximo passageiro
console.log("Próximo para embarcar: " + proximo)

// o próximo passageiro foi chamado e atendido
// remove o passageiro da fila
filaAeroporto.dequeue()

// imprime a fila atualizada
console.log("\nFila de passageiros: " + filaAeroporto.print())