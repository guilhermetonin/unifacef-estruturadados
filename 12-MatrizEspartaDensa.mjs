// conversão da representação Esparsa para uma matriz Densa
// recebe a lista enxuta (matrizEsparsa) e o tamanho da tabela

/*
forma mais simples:
	const matriz = []

	for (let i = 0; i < linhas; i++) {
		const novaLinha = new Array(colunas).fill(0) // cria [0, 0, 0, 0]
		matriz.push(novaLinha) // joga a linha para dentro da matriz
	}
*/ 

function MatrizEsparsaDensa(matrizEsparsa, linhas, colunas) {
	// Array.from(): cria um novo array
	// Array(colunas).fill(0): cria um array na linha e preenche TODOS os campos com o número 0 
	const matriz = Array.from({ length: linhas }, () => Array(colunas).fill(0));
	for (const { linha, coluna, valor } of matrizEsparsa) {
		matriz[linha][coluna] = valor
	}
	// .map: passa por cada linha da matriz 
	// .join: o array de números e vira um texto
	return matriz.map((linha) => linha.join("  ")).join("\n") 
	// join(\n): junta as linha quebrando espaço entre elas
}

const matrizEsparsa = [
	{ linha: 3, coluna: 0, valor: 3 },
	{ linha: 1, coluna: 1, valor: 8 },
	{ linha: 0, coluna: 3, valor: 5 },
]

console.log(MatrizEsparsaDensa(matrizEsparsa, 4, 4));