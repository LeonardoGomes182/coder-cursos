const numeros = [1, 2, 3, 4, 5, 4, 5, 6];

//numeros.splice(2, 1);//remove o elemento do indice 2 e exclui apenas 1 elemento
// numeros.splice(1, 4);//remove do indice 1 o elemento e exclui 4 elementos seguintes
numeros.splice(1, 4, -1, -2, -3); //remove do indice 1 o elemento e exclui 4 elementos seguintes e adiciona -1, -2 e -3
console.log(numeros);

 const numeroExcluido =numeros.pop()
console.log(numeros, numeroExcluido)
