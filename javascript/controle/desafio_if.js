const nota = 4.2;
let conceito = '?';

if (nota >= 9 && nota <= 10) {
  console.log("Conceito A");
}
if ((nota >= 7 && nota < 9)) {
  console.log("Conceito B");
}
if (nota >= 5 && nota < 7) {
  console.log("Conceito C");
}
if (nota >= 4.5 && nota < 5) {
  console.log("Conceito D");
}
if (nota < 4.5) {
  console.log("Conceito F");
}


//outra forma:

if (nota >= 9 && nota <= 10) {
   conceito = 'A'
  }
  if ((nota >= 7 && nota < 9)) {
    conceito = 'B'
  }
  if (nota >= 5 && nota < 7) {
  conceito = 'C'
  }
  if (nota >= 4.5 && nota < 5) {
    conceito = 'D'
  }
  if (nota < 4.5) {
    conceito = 'F'
  }

  console.log("O conceito do aluno é: ", conceito)