// repositório professor: github.com/XandyGomes/E.D.UniFacef.2026.1.git
// class - define a estrutura de dados e os seus métodos 
// que cada instância vai ter ao ser criada
class FormaGeometrica {
    // # - define atributos privados 
    // não podem ser lidos ou alterados de fora da classe
    #base;
    #altura;
    #tipo;

    // getter - método que permite a leitura de um atributo privado (#)
    get base() {
        return this.#base;
    }
    get altura() {
        return this.#altura;
    }
    get tipo() {
        return this.#tipo;
    }

    // setter - método que permite a alteração de um atributo privado (#)
    set base(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.");
        }
        this.#base = valor;
    }
    set altura(valor) {
        if (typeof valor !== "number" || valor <= 0) {
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.");
        }
        this.#altura = valor;
    }

    set tipo(valor) {
        if (!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error("ERRO: o tipo precisa ser um dos valores: R, T ou E.");
            // o erro interrompe o método
        }
        // passou na validação
        this.#tipo = valor.toUpperCase();
    }

    calcArea() {
        switch (this.#tipo) {
            case "R":
                return this.#base * this.#altura
            case "T":
                return (this.#base * this.#altura) / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }
}

let forma1 = new FormaGeometrica()
let forma2 = new FormaGeometrica()
let forma3 = new FormaGeometrica()

forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "E"

console.log("Área da forma1: ", forma1.calcArea())

forma2.base = 7
forma2.altura = 22.5
forma2.tipo = "R"

console.log("Área da forma2: ", forma2.calcArea())