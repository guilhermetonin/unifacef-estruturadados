/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 10 (dez) pessoas na sua frente:
    José, Sérgio, Joaquim, Maria, João, Samuel, Vicente, Terezinha, Firmino e Toninho
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada da pasta "lib" e depois criar o nosso "objeto" atendimento.
*/

/*
    3. Utilizando os conceitos e os arquivos de "FILA" feitos em sala, faça com que essa fila esteja na sequência a seguir
    para que o atendimento do plantão possa começar:
    
    1. José
    2. Sérgio
    3. Joaquim
    4. Maria
    5. João
    6. Samuel
    7. Vicente
    8. Terezinha
    9. Firmino
    10. Toninho
    11. Alexandre
*/

/*
    4. Imprima a fila na ordem correta (Utilize o comando correto).
*/

/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento (Utilize o comando correto).
*/

/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 3 (três) pessoas na seguinte sequência (Utilize o comando correto):
    - Rafael
    - Isabela
    - Cauã
    Adicione eles na ordem da fila
*/

/*
    8. Imprima a fila na ordem correta depois das alterações (Utilize o comando correto).
*/

/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre o comando a ser executado e qual o nome da próxima pessoa que será atendida.
*/

/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila (Utilize o comando correto).
*/

/*
    11. Imprima a fila na ordem correta depois de todas as alterações (Utilize o comando correto).
*/
// GUILHERME TONIN JORGE | SISTEMAS DE INFORMAÇÃO

// importa a classe Queue
import Queue from "./lib/Queue.mjs"

// cria o objeto filaAtendimento
let filaAtendimento = new Queue()

// adiciona as 10 pessoas na fila
filaAtendimento.enqueue("José")
filaAtendimento.enqueue("Sérgio")
filaAtendimento.enqueue("Joaquim")
filaAtendimento.enqueue("Maria")
filaAtendimento.enqueue("João")
filaAtendimento.enqueue("Samuel")
filaAtendimento.enqueue("Vicente")
filaAtendimento.enqueue("Terezinha")
filaAtendimento.enqueue("Firmino")
filaAtendimento.enqueue("Toninho")
filaAtendimento.enqueue("Alexandre") // professor Alexandre

// imprime a fila na ordem correta
console.log("\nFila: " + filaAtendimento.print())

// atende a pessoa que estava na frente da fila
let atendido = filaAtendimento.dequeue()

// imprime a pessoa que foi atendida
console.log("Foi atendido: " + atendido)

// imprime como ficou a fila depois do atendimento
console.log("\nFila: " + filaAtendimento.print())

// adiciona mais 3 pessoas
filaAtendimento.enqueue("Rafael")
filaAtendimento.enqueue("Isabela")
filaAtendimento.enqueue("Cauã")

// imprime como ficou a fila da chegada
console.log("\nFila: " + filaAtendimento.print())

// imprime o nome próxima pessoa a ser atendida
let proximo = filaAtendimento.peek()
console.log("Próxima pessoa a ser atendida: " + proximo)

// atende essa pessoa que estava na frente da fila
filaAtendimento.dequeue()

// imprime a fila depois de todas as alterações
console.log("\nFila: " + filaAtendimento.print())