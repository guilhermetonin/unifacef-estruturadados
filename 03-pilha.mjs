import Stack from "./lib/Stack.mjs"

let frase = "Socorram-me, subi no ônibus em Marrocos"

let pilha = new Stack()

// percorre a frase caractere por caractere
for (let i = 0; i < frase.length; i++) {
    // adiciona cada caractere no final do vetor
    pilha.push(frase.charAt(i)) // pega o caractere que está na posição (i)
}
console.log(pilha.print())

let reverso = ""

// enquanto o vetor não estiver vázio...
while (!pilha.isEmpty) {
    reverso += pilha.pop() // remove e retorna o último elemento do vetor
}
console.log({ reverso })