import Queue from "../../lib/Queue.mjs"

// estrutura da rede de conexões
const rede = {
    // nó : [onde ele consegue chegar]
    A: ["B", "C"], // tem estrada direta para o "B" e "C"
    B: ["D", "E"],
    C: ["F"], // só tem estrada para o "F"
    D: [], 
    E: [],
    F: [], // vázio, fim da linha
}

// algoritmo de busca em largura (BFS)
function bfs(rede, comeca) {
    const vistos = new Set() // impede duplicatas
    const fila = new Queue()

    // 1. coloca o elemento inicial na fila
    fila.enqueue(comeca)

    // 2. enquanto a fila tiver elementos, o processo continua
    while (!fila.isEmpty) {
        // remove o primeiro da fila
        const atual = fila.dequeue()

        // se o elemento atual ainda não foi processado
        if (!vistos.has(atual)) {
            console.log(atual) // exibe o elemento no console
            vistos.add(atual)  // marca como visto para não repetir

            // 3. pega a lista de conexões que o elemento atual tem
            const vizinhos = rede[atual]

            // 4. coloca todos os "vizinhos" na fila para serem visitados depois
            for (const vizinho of vizinhos) {
                if (!vistos.has(vizinho)) {
                    fila.enqueue(vizinho) // adiciona o "não visto" na fila
                }
            }
        }
    }
}

// executa o algoritmo começando pelo nó "A"
bfs(rede, "A")