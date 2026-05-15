# Complexidade (Big-O)

A **complexidade** de um algoritmo é a **métrica** que define o **consumo de recursos (tempo e memória)** em função do crescimento do **volume de dados de entrada (`n`)**. 

O objetivo é a **previsibilidade**: antecipar gargalos de performance antes da implantação em ambiente de produção.

## Tipos Principais

**Complexidade de `Tempo`:** mede o número de operações fundamentais executadas. Determina a latência do processo.

**Complexidade de `Espaço`:** mede a alocação de memória (RAM) necessária durante a execução.

---

## Hierarquia de Eficiência

A **`Notação Assintótica (Big-O)`** padroniza a análise, focando na curva de crescimento de longo prazo. 

### Eficiência Ótima
| Notação | Nome | Comportamento | Avaliação Técnica |
| :--- | :--- | :--- | :--- |
| **$O(1)$** | **Constante** | O tempo de execução é invariável, independentemente do tamanho de $n$. | **Ideal.** O cenário de performance perfeita. |
| **$O(\log n)$** | **Logarítmica** | Divide o espaço de busca pela metade a cada iteração. | **Excelente.** Escalabilidade excepcional para grandes volumes. |

### Eficiência Operacional
| Notação | Nome | Comportamento | Avaliação Técnica |
| :--- | :--- | :--- | :--- |
| **$O(n)$** | **Linear** | O esforço cresce na exata proporção dos dados. Processamento individual. | **Bom.** Padrão aceitável para a maioria das operações de varredura. |
| **$O(n \log n)$** | **Linearítmica** | Comum em algoritmos de ordenação eficientes (Merge Sort, Quick Sort). | **Eficiente.** A melhor abordagem para ordenação de grandes datasets. |

### Risco de Performance
| Notação | Nome | Comportamento | Avaliação Técnica |
| :--- | :--- | :--- | :--- |
| **$O(n^2)$** | **Quadrática** | Laços de repetição aninhados. O esforço é o quadrado da entrada. | **Lento.** Aceitável apenas para entradas pequenas ($n < 1000$). |

### Inviabilidade Técnica
| Notação | Nome | Comportamento | Avaliação Técnica |
| :--- | :--- | :--- | :--- |
| **$O(2^n)$** | **Exponencial** | O custo computacional dobra a cada novo elemento inserido. | **Crítico.** Inviável para processamento em tempo real. |
| **$O(n!)$** | **Fatorial** | Exploração de todas as permutações possíveis (Força Bruta). | **Desastroso.** Causa travamento do sistema em $n$ baixos. |