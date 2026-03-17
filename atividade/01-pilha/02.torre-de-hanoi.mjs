/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/
// GUILHERME TONIN JORGE | SISTEMAS DE INFORMAÇÃO


import Stack from './lib/Stack.mjs' // importa a classe Stack (Pilha)

let torreA = new Stack()
let torreB = new Stack()
let torreC = new Stack()

torreB.push(1)
torreB.push(2)
torreB.push(3)
torreB.push(4)

console.log("ANTES")
console.log("Torre A = " + torreA.print())
console.log("Torre B = " + torreB.print())
console.log("Torre C = " + torreC.print())

torreC.push(torreB.pop()) // A = []            | B = [1, 2, 3]   | C = [4]
torreA.push(torreB.pop()) // A = [3]           | B = [1, 2]      | C = [4]
torreA.push(torreC.pop()) // A = [3, 4]        | B = [1, 2]      | C = []
torreC.push(torreB.pop()) // A = [3, 4]        | B = [1]         | C = [2]
torreB.push(torreA.pop()) // A = [3]           | B = [1, 4]      | C = [2]
torreC.push(torreA.pop()) // A = []            | B = [1, 4]      | C = [2, 3]
torreC.push(torreB.pop()) // A = []            | B = [1]         | C = [2, 3, 4]
torreA.push(torreB.pop()) // A = [1]           | B = []          | C = [2, 3, 4]
torreA.push(torreC.pop()) // A = [1, 4]        | B = []          | C = [2, 3]
torreB.push(torreC.pop()) // A = [1, 4]        | B = [3]         | C = [2]
torreB.push(torreA.pop()) // A = [1]           | B = [3, 4]      | C = [2]
torreA.push(torreC.pop()) // A = [1, 2]        | B = [3, 4]      | C = []
torreC.push(torreB.pop()) // A = [1, 2]        | B = [3]         | C = [4]
torreA.push(torreB.pop()) // A = [1, 2, 3]     | B = []          | C = [4]
torreA.push(torreC.pop()) // A = [1, 2, 3, 4]  | B = []          | C = []

console.log("\nDEPOIS")
console.log("Torre A = " + torreA.print())
console.log("Torre B = " + torreB.print())
console.log("Torre C = " + torreC.print())