function retornaUmaFuncao() {
  return function () {
    return "Estou dentro da funcao anônima!";
  };
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());

const x = retornaUmaFuncao;
console.log(x);
console.log(x());
console.log(x()());
