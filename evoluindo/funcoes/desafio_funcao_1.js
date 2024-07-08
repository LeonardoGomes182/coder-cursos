// funcao: 3 Params => mediaSimples => console.log
function mediaSimples(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`Nota simples foi ${media}`);
}
mediaSimples(7, 9, 8);
mediaSimples(4.5, 9, 8);

// funcao: 3 Params => mediaPonderada => console.log
function mediaPonderada(nota1, nota2, nota3){
    const notaPonderada = (nota1 + 2 * nota2 + 3 * nota3) / 6
    console.log(`Nota ponderada foi ${notaPonderada}`);
}

mediaPonderada(7, 9, 8)