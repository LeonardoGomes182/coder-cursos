const numeros = [1, 2, 3, 4, 5, 4];

numeros[0] = 100;

numeros.push(6);
console.log(numeros.indexOf(4, 4)); //Procure o elemento 4 apartir do indice 4
console.log(numeros.indexOf(4)); //iundexOf - para saber o indice do elemento 4
console.log(numeros.indexOf(2));
console.log(numeros.includes(6)); //includes - pra saber se o elemento existe dentro do array
console.log(numeros.includes(10));

console.log(numeros.join());
console.log(numeros.join(";")); //join - juntar os elementos de um array, transformando o array emn uma string
console.log(numeros.join(" - "));

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);
console.log(numeros);
