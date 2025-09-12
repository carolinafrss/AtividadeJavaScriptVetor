//Faça um programa que lê 10 números inteiros do teclado e armazene em um vetor. 
// Ao final imprima o vetor armazenado nos dois sentidos.

const prompt = require('prompt-sync')();

let numeroInt = []; 

console.log("Digite 10 números inteiros:");

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Número ${i + 1}: `));
    numeroInt.push(num);
}

console.log("\nVetor na ordem original:");
console.log(numeroInt);

console.log("\nVetor na ordem inversa:");
console.log([...numeroInt].reverse()); // cria uma cópia antes de inverter



