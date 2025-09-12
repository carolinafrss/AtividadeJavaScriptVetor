//Ler um vetor de 10 elementos inteiros e positivos. 
// Criar um segundo vetor da seguinte forma: Os elementos de índice par receberão os respectivos elementos divididos por 2; 
// Os elementos de índice ímpar receberão os respectivos elementos multiplicados por 3.
// Imprima os dois vetores.

// Vetor de 10 elementos inteiros e positivos
const elementosInt = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Novo vetor a ser criado com base nas regras
const elementosSeg = [];

// Loop para preencher o segundo vetor conforme o índice
for (let i = 0; i < elementosInt.length; i++) {
    if (i % 2 === 0) { 
        elementosSeg[i] = elementosInt[i] / 2;// Índice par: divide por 2
    } else {
      
        elementosSeg[i] = elementosInt[i] * 3; // Índice ímpar: multiplica por 3
    }
}

// Impressão dos dois vetores
console.log("Vetor original:", elementosInt);
console.log("Vetor modificado:", elementosSeg);
