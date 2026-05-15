// O(1), porque a operação de acesso ao primeiro elemento do arrayay é feita em tempo constante, independentemente do tamanho do arrayay
function exemploO1(array) {
    if (array.length === 0) {
        return null
    }
    return array[0]
}

// const array = [5, 7, 8, 9, 2, 3, 4];
// console.log(exampleO1(arrayay))

// O(log n), porque a cada iteração, o valor de i é multiplicado por 2, o que significa que o número de iterações necessárias para que i atinja "n" é logarítimico em relação a "n"
function exemploOlogN(n) {
    let i = 1;
    while (i < n) {
        console.log(i);
        i *= 2;
    }
}
// console.log(exemploOlogN(5))

// O(n), porque a funcção percorre todos os elementos do arrayay um vez, realizando uma operação constante para cada elemento (console.log)
function exemploOn(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// exemploOn(array);

// O(n^2), porque a função contém dois loops aninhados que percorrem todos os elentos do arrayay, resultando em um número total de operações proporcional ao quadrado do tamanho do arrayay
function exemploN2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

const array = [1, 2, 3, 4, 5];
exemploN2(array)