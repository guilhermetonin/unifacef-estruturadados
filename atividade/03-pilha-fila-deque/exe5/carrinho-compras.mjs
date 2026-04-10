import Deque from "./Deque.mjs"

let carrinho = new Deque() 

carrinho.insertFront("Mouse")
carrinho.insertFront("Fone de Ouvido")

carrinho.insertBack("Monitor")
carrinho.insertBack("TV")

console.log("\nCarrinho de compras: " + carrinho.print())

carrinho.insertFront("Fone de Ouvido") // tenta adicionar item repetido

console.log("\nCarrinho de compras final: " + carrinho.print())
