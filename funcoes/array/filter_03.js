Array.prototype.meuFilter = function (fn) {
  //fn -. TRUE ou FALSE

  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    const elemento = this[i];
    if (fn(elemento)) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};

const maiorOuIgualA4 = (numero) => numero >= 4;

const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.filter(maiorOuIgualA4));
console.log(numeros.meuFilter(maiorOuIgualA4));
