import Stack from "./lib/Stack.mjs";

// estrutura da rede de conexões (grafo)
const rede = {
    // nó : [onde ele consegue chegar]
    A: ["B", "C"], // tem estrada direta para o "B" e "C"
    B: ["D", "E"],
    C: ["F"],      // só tem estrada para o "F"
    D: [], 
    E: [],
    F: [],         // vazio, fim da linha
};

// algoritmo de busca em profundidade (DFS)
function dfs(rede, comeca) {
    const vistos = new Set(); // impede duplicatas
    const pilha = new Stack();

    // 1. coloca o elemento inicial na pilha
    pilha.push(comeca);

    // 2. enquanto a pilha tiver elementos, o processo continua
    while (!pilha.isEmpty) {
        // remove o último elemento que entrou (topo da pilha)
        const atual = pilha.pop();

        // se o elemento atual ainda não foi processado
        if (!vistos.has(atual)) {
            console.log(atual); // exibe o elemento no console
            vistos.add(atual);  // marca como visto para não repetir

            // 3. pega a lista de conexões que o elemento atual tem
            const vizinhos = rede[atual];

            // 4. percorre os vizinhos de trás para frente (decrescente)
            // isso garante que o primeiro vizinho fique no topo da pilha e seja o próximo a ser lido
            for (let i = vizinhos.length - 1; i >= 0; i--) {
                const vizinho = vizinhos[i];
                
                if (!vistos.has(vizinho)) {
                    pilha.push(vizinho); // adiciona o "não visto" na pilha
                }
            }
        }
    }
}

// executa o algoritmo começando pelo nó "A"
dfs(rede, "A");