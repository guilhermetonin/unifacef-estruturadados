import Stack from "./Stack.mjs"

let texto = new Stack(5)

texto.push("Me") // 1
texto.push("ajuda") // 2
texto.push("com") // 3
texto.push("isso") // 4
texto.push("?") // 5 (capacidade máxima atingida)

console.log("\nTexto: " + texto.print())

texto.push("porfavor") // erro. atingiu a capacidade máxima.

console.log("\nTexto final: " + texto.print())


