//Faça um programa que leia e monte dois vetores de números inteiros com 20 números cada.
// Depois de montados gere um terceiro vetor formado pela diferença dos dois vetores lidos, 
// um quarto vetor formado pela soma dos dois vetores lidos e 
// por último um quinto vetor formado pela multiplicação dos dois vetores lidos.

const prompt = require('prompt-sync')();

let vetor1 = [];
let vetor2 = [];
let vetor3 = []; // Vetor para a Diferença
let vetor4 = []; // Vetor para a soma
let vetor5 = []; // Vetor para a multiplicação

console.log("Digite 20 números inteiros para o VETOR 1:");
for (let i = 0; i < 20; i++) {
    let num = parseInt(prompt(`Vetor1[${i}]: `));
    vetor1.push(num);
}

console.log("\nDigite 20 números inteiros para o VETOR 2:");
for (let i = 0; i < 20; i++) {
    let num = parseInt(prompt(`Vetor2[${i}]: `));
    vetor2.push(num);
}
// Operações
for (let i = 0; i < 20; i++) {
    vetor3.push(vetor1[i] - vetor2[i]); // Verifica a Diferença
    vetor4.push(vetor1[i] + vetor2[i]); // Verifica a soma
    vetor5.push(vetor1[i] * vetor2[i]); // Verifica a multiplicação
}

// Exibição
console.log("\nVetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Vetor 3 (diferença):", vetor3);
console.log("Vetor 4 (soma):", vetor4);
console.log("Vetor 5 (multiplicação):", vetor5);
