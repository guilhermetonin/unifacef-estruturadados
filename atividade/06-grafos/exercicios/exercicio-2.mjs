import Stack from "../lib/Stack.mjs"

const grafoArvore = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B"],
    F: ["C"]
}

const grafoComCiclo = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B", "E"],
    E: ["B", "D"],
    F: ["C"]
}

function detectarCiclo(grafo, inicio) {
    const visitados = new Set()
    const pilha = new Stack()

    const pais = {}

    pilha.push(inicio)
    pais[inicio] = null

    while (!pilha.isEmpty) {
        const no = pilha.pop()

        if (!visitados.has(no)) {
            visitados.add(no)

            const vizinhos = grafo[no]

            for (let i = vizinhos.length - 1; i >= 0; i--) {
                const vizinho = vizinhos[i]

                if (!visitados.has(vizinho)) {
                    pilha.push(vizinho)
                    pais[vizinho] = no
                } else if (vizinho !== pais[no]) {
                    return true
                }

            }
            
        }
    }

    return false
}

console.log("grafo àrvore tem ciclo?", detectarCiclo(grafoArvore, "A"))
console.log("grafo com ciclo tem ciclo?", detectarCiclo(grafoComCiclo, "A"))