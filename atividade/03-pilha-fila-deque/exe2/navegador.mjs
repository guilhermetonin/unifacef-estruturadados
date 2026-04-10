import Stack from "./Stack.mjs";

let chrome = new Stack()

chrome.push("terra.com") // removido
chrome.pop() // armazenou no historyData

chrome.push("unifacef.com") // removido
chrome.pop() // armazenou no historyData

chrome.push("ava-grad.unifacef.com.br")
chrome.push("terra.com")

console.log("\nStack: " + chrome.print())
console.log("\nHistory data: " + chrome.history()) // historico de removidos