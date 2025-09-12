//Utilizando vetores, crie um programa que organize uma quantidade qualquer de números inteiros
// fornecidos pelo usuário da seguinte forma: primeiro os números pares em ordem crescente e
// depois os números ímpares em ordem decrescente.

const prompt = require('prompt-sync')();

let numeros = [];
let pares = [];
let impares = [];

// Lê a quantidade de números que o usuário deseja informar
let qtd = parseInt(prompt("Quantos números deseja digitar? "));

// Lê os números do usuário
for (let i = 0; i < qtd; i++) {
    let num = parseInt(prompt(`Digite o número ${i + 1}: `));
    numeros.push(num);

    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

// Ordena pares em ordem crescente
pares.sort((a, b) => a - b);

// Ordena ímpares em ordem decrescente
impares.sort((a, b) => b - a);

// Junta os dois vetores
let resultado = pares.concat(impares);

// Exibe o resultado
console.log("\nNúmeros organizados:");
console.log(resultado);
