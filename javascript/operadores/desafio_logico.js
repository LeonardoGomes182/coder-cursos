//Aluno faltou 18 vezes em um total de 223 aulas no ano
//Notas: 5.8, 8.1, 6.9

//O aluno foi aprovado?
//Media maior ou igual a 7, e frequencia de 80%

const nota1 = 5.8;
const nota2 = 8.1;
const nota3 = 6.9;
const media = (nota1 + nota2 + nota3) / 3;

const faltas = 18;
const totalDeAulas = 223;
const aulasComparecidas = totalDeAulas - faltas;
const frequenciaMinima = 80;
const frenquencia = Math.round((aulasComparecidas / totalDeAulas) * 100);



if(media >= 7 && frenquencia >= frequenciaMinima){
    console.log("O aluno foi Aprovado! ");
    console.log("Nota: " + media);
    console.log("Frequencia", frenquencia);
}else{
    console.log("O aluno foi reprovado!");
    console.log("Nota: " + media);
    console.log("Frequencia", frenquencia + "%");
}

console.log("/-----------------------------------------")

//resolução do professor

const temMediaSufuciente = media >= 7;

//aluno foi aprovado?
const aprovado =  frenquencia && temMediaSufuciente;
console.log("Frequencia: ", frenquencia + "%");
console.log("Media do aluno: ", media);
console.log("Aluno aprovado? ",aprovado);
