function fatorialInterativo(n) {
    const inicio = performance.now()

    let resultado = 1
    for (let i = 2; i <= n; i++) {
        resultado *= i
    }

    const fim = performance.now()
    const tempoGasto = fim - inicio

    const memoriaPilhaMB = (n * 4) / (1024 * 1024)

    let memoriaTotalMB = "N/A"
    if (typeof process !== "undefined" && process.memoryUsage()) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }

    console.clear()
    console.log(`---Análise de complexidade interativa O(n!)---`)
    console.log(`Tamanho da entrada: ${n}`)
    console.log(`Resultado do fatorial: ${resultado}`)
    console.log(`Tempo de execução: ${tempoGasto.toFixed(6)} ms`)
    console.log(`Memória estimada da pilha de chamadas: ${memoriaPilhaMB} MB`)
    console.log(`Memória total usada pelo processo: ${
        typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) : memoriaTotalMB
    } MB`)
}

// chamar função
const numero = 50
fatorialInterativo(numero)