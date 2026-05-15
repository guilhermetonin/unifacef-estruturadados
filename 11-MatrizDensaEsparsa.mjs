// conversão de uma matriz Densa para uma de representação da matriz Esparsa
// molde da matriz densa
class MatrizDensaEsparsa {
    constructor(linhas, colunas) {
        this.linhas = linhas
        this.colunas = colunas
        this.dados = [] // lista de triplas
    }

    // tenta colocar os números dentro da matriz
    inserir(linha, coluna, valor) {
        if (valor !== 0) { // se for 0, é ignorado
            // objeto: { linha: linha, coluna: coluna, valor: valor }
            this.dados.push({
                linha,
                coluna,
                valor
            })
        }
    }

    exibir() {
        for (const item of this.dados) {
            console.log(`Linha: ${item.linha}, Coluna: ${item.coluna}, Valor = ${item.valor}`);
        }
    }
}
/*
exemplo do vetor de dados = [
    { linha: 1, coluna: 4, valor: 9 },
    { linha: 2, coluna: 8, valor: 15 },
    { linha: 5, coluna: 3, valor: 72 }
]
*/

const matriz = new MatrizDensaEsparsa(4, 4)

matriz.inserir(0, 0, 0)
matriz.inserir(1, 0, 0)
matriz.inserir(2, 0, 0)
matriz.inserir(3, 0, 3)
matriz.inserir(0, 1, 0)
matriz.inserir(1, 1, 8)
matriz.inserir(2, 1, 0)
matriz.inserir(3, 1, 0)
matriz.inserir(0, 2, 0)
matriz.inserir(1, 2, 0)
matriz.inserir(2, 2, 0)
matriz.inserir(3, 2, 0)
matriz.inserir(0, 3, 5)
matriz.inserir(1, 3, 0)
matriz.inserir(2, 3, 0)
matriz.inserir(3, 3, 0)

matriz.exibir()