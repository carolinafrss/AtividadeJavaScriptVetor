//Ler um vetor de 10 elementos. Crie um segundo vetor, com todos os elementos na ordem inversa,
// ou seja, o último elemento passará a ser o primeiro, o penúltimo será o segundo e assim por diante.
// Imprima os dois vetores.

// Vetor original com 10 elementos
const elementos = ["água", "terra", "fogo", "ar", "éter", "luz", "sombra", "tempo", "espaço", "matéria"];

// Vetor para armazenar os elementos na ordem inversa
const vetorInverso = [];

// Loop para inverter os elementos
for (let i = 0; i < elementos.length; i++) {
    vetorInverso[i] = elementos[elementos.length - 1 - i];
}

// Exibir os vetores
console.log("Vetor original: ", elementos);
console.log("Vetor invertido:", vetorInverso);
