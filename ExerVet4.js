//Ler um vetor com 10 nomes de pessoas, após pedir que o usuário digite um nome qualquer de pessoa.
//Escrever a mensagem “ACHEI”, se o nome estiver armazenado no vetor C ou “NÃO ACHEI”,caso contrário.

const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync para entrada de dados

// Vetor com 10 nomes de pessoas

let vetNome = ["Helena", "Miguel", "Gael", "Ravi", "Theo", "Heitor", "Cecília", "Arthur", "Noah", "Maite"];
let vetBusca = prompt("Digite um nome para buscar:");
let vetAchei = false;

for (let i = 0; i < vetNome.length; i++) {
    if (vetBusca === vetNome[i]) {
        vetAchei = true;
        break; // Sai do loop se encontrar o nome
    }
    else{
        
    }
}
if (vetAchei) {                   // Verifica se encontrou o nome no vetor
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}
