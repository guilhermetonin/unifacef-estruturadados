// medir a complexidade de O(n!) com Recursão

function fatorial(n) {
    const inicio = performance.now() // registro de tempo atual em milissegundos (ms)

    // Recursão: funciona como uma fila de espera onde cada chamada aguarda 
    // a resposta da próxima para calcular o resultado final.
    function fatorialRecursivo(num) {
        if (num === 0) {
            return 1
        }
        return num * fatorialRecursivo(num - 1)
    }

    const resultado = fatorialRecursivo(n)

    const fim = performance.now()
    const tempoGasto = fim - inicio

    // memória estimada usada só pela pilha de chamadas (*4 bytes por número inteiro)
    // *1024 para converter o valor de bytes para megabytes
    const memoriaPilhaMB = (n * 4) / (1024 * 1024)

    // memória real usada pelo processo
    let memoriaTotalMB = "N/A"
    if (typeof process !== undefined && process.memoryUsage()) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }

    console.clear() // limpar console
    console.log("--- Complexidade Recursiva O(n!) ---")
    console.log(`Tamanho da entrada: ${n}`)
    console.log(`Resultado do Fatorial: ${resultado}`)
    console.log(`Tempo de execução: ${tempoGasto.toFixed(6)} ms`)
    console.log(`Memória estimada da pilha de chamadas: ${memoriaPilhaMB} MB`)
    console.log(`Memória total usada pelo processo: ${typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) : memoriaTotalMB
        } MB`)
}

const numero = 10
fatorial(numero)