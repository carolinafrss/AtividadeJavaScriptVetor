//Dados dois vetores de tamanho N.
//  faça uma função que diga se os mesmos possuam conteúdo igual.

function vetoresIguais(vetor1, vetor2) {
  // Primeiro: verificar se os tamanhos dos vetores são iguais
  if (vetor1.length !== vetor2.length) {
    return false; // Se forem diferentes, já sabemos que não são iguais
  }

  // Agora, vamos comparar os valores, um por um
  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false; // Se acharmos algum valor diferente, retornamos false
    }
  }

  // Se passou por todos os testes acima, então os vetores são iguais
  return true;
}


          