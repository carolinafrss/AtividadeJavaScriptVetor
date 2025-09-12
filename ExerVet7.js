//Dados dois vetores de tamanho N.
// faça uma função que diga se os mesmos possuam conteúdo igual.
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Digite o tamanho dos vetores: "));
let vetor1 = [];
let vetor2 = [];
let iguais = true;

for (let i = 0; i < n; i++) {
    vetor1[i] = parseInt(prompt(`Digite o ${i + 1}º valor do vetor 1: `));
}
for (let i = 0; i < n; i++) {
    vetor2[i] = parseInt(prompt(`Digite o ${i + 1}º valor do vetor 2: `));

    if (vetor1[i] !== vetor2[i]) {
        iguais = false;
    }

}
if (iguais) {
    console.log("Os vetores são iguais.");
} else {
    console.log("Os vetores são diferentes.");
}
