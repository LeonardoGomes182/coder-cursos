//funcao:3 Params => mediaSimples => console.log

function mediaSimples(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média simples é: ${media}`);
}

//funcao:3 Params => mediaPonderada => console.log
function mediaPonderada(nota1, nota2, nota3) {
  const mediaPonderada = (nota1 + 2 * nota2 + 3 * nota3) / 6;
  console.log(`A média ponderada é: ${mediaPonderada}`);
}
mediaSimples(10, 9, 8);
mediaPonderada(10, 9, 8);
