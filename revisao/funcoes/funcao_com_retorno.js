function mediaPonderada(nota1, nota2, nota3) {
  const media = (nota1 + 2 * nota2 + 3 * nota3) / 6;
  // console.log(`A media ponderada é: ${media}`)
  return media;
}

function mediaSimples(nota1, nota2) {
  return (nota1 + nota2 ) / 2;
}

const media1 = mediaPonderada(7, 8, 9);
const media2 = mediaPonderada(5.8, 8.3, 9.9);
const mediaFinal = mediaSimples(media1, media2);
const mediaFinalInteira = Math.ceil(mediaFinal);

console.log(media1, media2);
console.log("Media final: ", mediaFinal);
console.log("Media arredondada: ", mediaFinalInteira);
