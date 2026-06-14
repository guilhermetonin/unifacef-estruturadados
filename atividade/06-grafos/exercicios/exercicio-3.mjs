import Queue from "../lib/Queue.mjs"

const grafoArvore = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B"],
    F: ["C"]
}

const grafoDesconexo = {
    A: ["B"],
    B: ["A"],
    C: ["D"],
    D: ["C"],
    E: []
}

function contarComponentesConexos(grafo) {
    const visitados = new Set()
    let contador = 0

    const todosNos = Object.keys(grafo)

    for (const noInicial of todosNos) {

        if (!visitados.has(noInicial)) {
            contador++

            const fila = new Queue()
            fila.enqueue(noInicial)

            while (!fila.isEmpty) {
                const no = fila.dequeue()

                if (!visitados.has(no)) {
                    visitados.add(no)

                    for (const vizinho of grafo[no]) {
                        if (!visitados.has(vizinho)) {
                            fila.enqueue(vizinho)
                        }
                    }

                }
                
            }
        }
    }

    return contador
}

console.log("qtd componentes do grafoArvore:", contarComponentesConexos(grafoArvore))
console.log("qtd componentes do grafoDesconexo:", contarComponentesConexos(grafoDesconexo))