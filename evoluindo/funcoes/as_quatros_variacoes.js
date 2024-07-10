// #1 - Função SEM parametros e SEM retorno
function exibirBomDia() {
  console.log("Bom dia");
}
exibirBomDia();

// #2 - Função COM parametros e SEM retorno
function exibirBomDiaPara(nome, idade) {
  console.log(`Bom dia ${nome}. Eu tenho ${idade} anos`);
}

exibirBomDiaPara("Leonardo", 38);

// #3 - Função SEM parametro e COM retorno

function numeroEntre0e10() {
  const numero = parseInt(Math.random() * 10);
  return numero;
}

console.log(numeroEntre0e10());

// #4 - Função COM parametro e COM retorno

function somar(nota1, nota2) {
  return nota1 + nota2;
}
const soma = somar(100, 200);
console.log(somar(2, 3));
console.log(soma);
