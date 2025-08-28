// #1 - Função SEM parametros e SEM retorno
function exibirBomDia() {
  console.log("Bom dia");
}
exibirBomDia();

// #2 - Função COM parametros e SEM retorno

function exibirBomDiaPara(nome) {
  console.log(`Bom dia ${nome}`);
}

exibirBomDiaPara("Leonardo");
exibirBomDiaPara("Denis");
exibirBomDiaPara("Jhonny");

// #3 - Função SEM parametro e COM retorno

function numeroEntre0e10() {
  const numero = parseInt(Math.random() * 10);
  return numero;
}

console.log(numeroEntre0e10());

// #4 - Função COM parametro e COM retorno
function somar(n1, n2) {
  return n1 + n2;
}
console.log(`O resultado da soma é:`, somar(2, 3));
