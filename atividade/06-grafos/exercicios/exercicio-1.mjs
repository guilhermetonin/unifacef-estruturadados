import Queue from "../lib/Queue.mjs"

const grafoArvore = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B"],
    F: ["C"]
}

function obterDistanciasEBFS(grafo, inicio) {
    const visitados = new Set()
    const fila = new Queue()

    const distancias = {}
    const caminhos = {}

    distancias[inicio] = 0
    caminhos[inicio] = [inicio]

    fila.enqueue(inicio)

    while (!fila.isEmpty) {
        const no = fila.dequeue()

        if (!visitados.has(no)) {
            visitados.add(no)

            for (const vizinho of grafo[no]) {
                if (!visitados.has(vizinho)) {

                    if (distancias[vizinho] === undefined) {
                        distancias[vizinho] = distancias[no] + 1
                        caminhos[vizinho] = [...caminhos[no], vizinho]
                    }
                    
                    fila.enqueue(vizinho)

                }
            }
        }
    }

    return {
        distancias,
        caminhos
    }
}

console.log(obterDistanciasEBFS(grafoArvore, "A"))