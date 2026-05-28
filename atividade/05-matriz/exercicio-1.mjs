/*
1. Big Data na Recomendação 
Uma matriz esparsa é aquela onde a maioria dos elementos são zeros. No
Netflix, temos uma matriz onde as linhas são usuários e as colunas são
filmes. Como um usuário assiste a apenas uma fração minúscula do catálogo,
armazenar todos os zeros é um desperdício massivo de recursos.

Desafio de Cálculo de Memória
Considere o seguinte cenário real:
• Usuários: 1.000.000 (1 milhão)
• Filmes no Catálogo: 10.000
• Média de filmes assistidos por usuário: 100

Sua tarefa (As respostas de cada exercício, devem estar como comentários
no arquivo “.JS” dessa tarefa:

1. Calcule quantos Gigabytes (GB) seriam necessários para armazenar essa
matriz no formato Denso (onde guardamos todos os zeros), considerando
que cada número ocupa o tipo padrão de 4 bytes.
    R: 1.000.000 * 10.000 = 10.000.000.000 (10 bilhões)
    10.000.000.000 * 4 bytes = 40.000.000.000 bytes
    40.000.000.000 / (1024 * 1024 * 1024) = 37.2529... GB

2. Calcule o espaço necessário no formato Esparso (COO), onde para cada
filme assistido guardamos a tripla: {linha, coluna, valor}. (Dica: cada tripla
terá 3 números de 4 bytes cada).
    R: 1.000.000 usuários * 100 filmes = 100.000.000 (100 milhões)
    3 números * 4 bytes = 12 bytes por cada tripla
    100.000.000 * 12 bytes = 1.200.000.000 bytes
    1.200.000.000 / (1024 * 1024 * 1024) = 1.1175... GB

3. Qual é a economia real de memória em porcetagem?
    R: 1.1175 / 37.2529 = 0.029997
    0.029997 * 100 = 2.9997%
    100% - 2.9997% = 97.0003% 
    Economia real de memória de 97%.
*/