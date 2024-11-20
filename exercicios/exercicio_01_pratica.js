//Exercicio de Javascript - aula 02 e 03

function entregaPraDiretoria(aluno) {
  let objRetorno = {
    nome: aluno.nome,
    materias: [],
  };

  for (materia of aluno.materias) {
    let acumuladora = 0;
    for (nota of materia.notas) {
      acumuladora = acumuladora + nota;
    }

    objRetorno.materias.push({
      nome: materia.nome,
      media: acumuladora / 4,
    });
  }
  return objRetorno;
}

function entregaProAluno(aluno) {
  let alunoComMedia = entregaPraDiretoria(aluno);
  let objRetorno = {
    nome: alunoComMedia.nome,
    materias: [],
  };

  for (materia of alunoComMedia.materias) {
    let conceito;
    if (materia.media >= 7) {
      conceito = "APROVADO";
    } else if (materia.media < 7 && materia.media >= 5) {
      conceito = "RECUPERACAO";
    } else {
      conceito = "REPROVADO";
    }
    objRetorno.materias.push({
      nome: materia.nome,
      conceito: conceito,
    });
  }
  return objRetorno;
}

function entregaProsPais(aluno) {}

const joaozinho = {
  nome: "Joaozinho",
  materias: [
    {
      nome: "Português",
      notas: [7.4, 5.6, 10, 9],
    },
    {
      nome: "Matemática",
      notas: [4.4, 5.0, 8.2, 7.0],
    },
    {
      nome: "Ciencia",
      notas: [8.2, 7.6, 8.0, 6.3],
    },
    {
      nome: "Estudo Socais",
      notas: [9.2, 7.6, 8.5, 7.0],
    },
  ],
};

console.log(entregaPraDiretoria(joaozinho));
console.log(entregaProAluno(joaozinho));
console.log(entregaProsPais(joaozinho));
