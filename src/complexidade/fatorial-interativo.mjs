// medir a complexidade de O(n) com loops

function fatorialInterativo(n) {
    const inicio = performance.now() // registro de tempo atual em milissegundos (ms)

    let resultado = 1 // (não pode começar com 0)
    for (let i = 2; i <= n; i++) {
        resultado *= i // pega o resultado e multiplica pelo próximo número
    }

    const fim = performance.now()
    const tempoGasto = fim - inicio

    // memória estimada usada só pela pilha de chamadas (*4 bytes por número inteiro)
    // *1024 para converter o valor de bytes para megabytes
    const memoriaPilhaMB = (n * 4) / (1024 * 1024)

    let memoriaTotalMB = "N/A"
    if (typeof process !== "undefined" && process.memoryUsage()) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }

    console.clear() // limpar console
    console.log("--- Complexidade Interativa O(n) ---")
    console.log(`Tamanho da entrada: ${n}`)
    console.log(`Resultado do Fatorial: ${resultado}`)
    console.log(`Tempo de execução: ${tempoGasto.toFixed(6)} ms`)
    console.log(`Memória estimada da pilha de chamadas: ${memoriaPilhaMB} MB`)
    console.log(`Memória total usada pelo processo: ${typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) : memoriaTotalMB
        } MB`)
}

const numero = 10
fatorialInterativo(numero)