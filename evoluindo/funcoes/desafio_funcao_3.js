function media(n1, n2, n3) {
  if (n1 <= n2 && n1 <= n3) {
    return (n2 + n3) / 2;
  } else if (n2 <= n1 && n2 <= n3) {
    return (n1 + n3) / 2;
  } else if (n3 <= n1 && n3 <= n2) {
    return (n1 + n2) / 2;
  }
}

function mediaParaStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function notasParaStatus(n1, n2, n3) {
  let mediaFinal = media(n1, n2, n3);
  return mediaParaStatus(mediaFinal);
}

const nota1 = 1.1;
const nota2 = 1.4;
const nota3 = 1.4;

console.log(notasParaStatus(nota1, nota2, nota3));
