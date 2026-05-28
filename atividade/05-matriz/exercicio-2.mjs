/*
2. Big Data na Netflix (Código)
Imagine que você é um desenvolvedor na Netflix. Temos uma matriz onde as
linhas são usuários e as colunas são filmes. Como a maioria dos usuários não
assistiu a todos os filmes, usamos o formato COO (Lista de Triplas) para não
desperdiçar memória.

Especificações Técnicas:
• Total de Usuários (Linhas): 4
• Total de Filmes (Colunas): 5

Vetor de Pesos: Contém a importância de cada um dos 5 filmes para uma
recomendação atual.

Sua Tarefa de Programação:
Implemente em JavaScript uma função que realize a multiplicação da Matriz
Esparsa (COO) pelo Vetor de Pesos.

Requisitos do Código:
• A função deve receber um array de objetos (a matriz) e um array simples (o vetor).
• Proibido: Você não deve criar uma matriz densa (com zeros) em nenhum momento.
• O processamento deve ser eficiente, percorrendo apenas os elementos que
existem na lista de triplas.
*/

/**
* @param {Array} matrizEsparsa - Lista de objetos {linha, coluna, valor}
* @param {Array} vetorDenso - Array com os pesos dos filmes
*/
function multiplicarRecomendacao(matrizEsparsa, vetorDenso) {
    const resultado = new Array(5).fill(0)

    for (let i = 0; i < matrizEsparsa.length; i++) {
        let item = matrizEsparsa[i]
        resultado[item.linha] += item.valor * vetorDenso[item.coluna]
    }
    return resultado
}

// --- DADOS PARA TESTE ---
const avaliacoes = [
    { linha: 0, coluna: 1, valor: 5 },
    { linha: 1, coluna: 3, valor: 2 },
    { linha: 3, coluna: 0, valor: 4 },
    // Usuário 0 -> Filme 1 (Nota 5)
    // Usuário 1 -> Filme 3 (Nota 2)
    // Usuário 3 -> Filme 0 (Nota 4)
]

const pesos = [10, 20, 30, 40, 50] // Pesos para os filmes 0, 1, 2, 3 e 4 
// (no total deu 5 filmes)

// Resultado esperado: [100, 80, 0, 40, 0]
console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos))

/*
Por que este algoritmo é mais rápido do que um que percorre
a matriz linha por linha e coluna por coluna?
    R: O algoritmo que usa a representação Esparsa é mais rápido porque ele vai
    direto ao ponto, só percorrendo e processando os filmes que os usuários
    realmente assistiram. Sua complexidade é O(N), dependendo apenas do número 
    de interações reais. 

    Já o algoritmo que usa a matriz Densa precisa percorrer a matriz inteira,
    linha por linha e coluna por coluna. Sua complexidade é O(L * C), 
    L=LINHAS C=COLUNAS. Esse método perderia tempo processando 10 bilhões de
    combinações com bastante zeros e outro roda apenas 100 milhões.
*/