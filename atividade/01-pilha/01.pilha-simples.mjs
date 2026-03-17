/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/
// GUILHERME TONIN JORGE | SISTEMAS DE INFORMAÇÃO

import Stack from './lib/Stack.mjs' // importa a classe Stack (Pilha)

let pilha = new Stack() // cria uma nova instância vázia
pilha.push(5) // insere 5 na pilha = [5]
pilha.push(9) // insere 9 na pilha = [5, 9]
pilha.pop() // remove o elemento do topo = [5]
pilha.push(3) // insere 3 na pilha = [5, 3]
pilha.push(8) // insere 8 na pilha = [5, 3, 8]
pilha.pop() // remove o elemento do topo = [5, 3]
pilha.pop() // remove o elemento do topo = [5]
pilha.push(6) // insere 6 na pilha = [5, 6]
pilha.push() // insere um valor nulo na pilha = [5, 6, null]
pilha.push(2) // insere 2 na pilha = [5, 6, null, 2]
pilha.pop() // remove o elemento do topo = [5, 6, null]
pilha.push(10) // insere 10 na pilha = [5, 6, null, 10]
pilha.push(1) // insere 1 na pilha = [5, 6, null, 10, 1]
pilha.pop() // remove o elemento do topo = [5, 6, null, 10]
pilha.pop() // remove o elemento do topo = [5, 6, null]
pilha.push(15) // insere 15 na pilha = [5, 6, null, 15]
pilha.pop() // remove o elemento do topo = [5, 6, null]
pilha.pop() // remove o elemento do topo = [5, 6]

console.log("Pilha final: " + pilha.print())