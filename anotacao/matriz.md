# Matrizes Densas vs Esparsas

## Matriz
Uma matriz é uma estrutura de dados bidimensional organizada em **Linhas (horizontais)** e **Colunas (verticais)**. Cada interseção entre uma linha e uma coluna é chamada de **elemento**.

## Matriz Densa (Convencional)
Na abordagem **densa**, o computador aloca espaço na memória para **todos os elementos** da tabela, **independentemente** do seu **conteúdo**.

### Exemplo Visual (4x4)
Imagine uma matriz onde apenas 3 valores são relevantes e o restante é zero:

| | Col 0 | Col 1 | Col 2 | Col 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Lin 0** | 0 | 0 | 0 | **5** |
| **Lin 1** | 0 | **8** | 0 | 0 |
| **Lin 2** | 0 | 0 | 0 | 0 |
| **Lin 3** | **3** | 0 | 0 | 0 |

> **Total de posições:** 16

> **Zeros armazenados:** 13

> **Desperdício:** computador consome memória para guardar informações irrelevantes (zeros).

---

## Matriz Esparsa
Uma matriz é considerada **esparsa** quando a grande maioria de seus elementos é nula (zero). Para evitar o desperdício de memória, utilizamos métodos de representação inteligente.

## Representação por Lista de Triplas (COO - Coordinate List)
Em vez de salvar a grade inteira, salvamos apenas as **coordenadas** e o **valor** dos elementos que não são zero. 

### "Lista Inteligente"
O computador armazena apenas o que é essencial. A matriz 4x4 do exemplo anterior é reduzida a apenas 3 registros:

| Linha | Coluna | Valor |
| :---: | :---: | :---: |
| 0 | 3 | **5** |
| 1 | 1 | **8** |
| 3 | 0 | **3** |

> **Economia de Memória:** em sistemas reais, as matrizes podem ter milhões de linhas, mas apenas alguns dados preenchidos.

> **Performance:** algoritmos processam os dados úteis, ignorando bilhões de operações inúteis com zeros.

> **Escalabilidade:** permite trabalhar com conjuntos de dados que seriam grandes demais para a memória RAM se fossem armazenados de forma densa.