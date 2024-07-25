const numeros = [7, 99, 1683, 4674, 33, 38, 47, 59];

//resultado deverá mostrar 47, 33, 1683, 7
for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

console.log("-----------------------------------");
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = numeros2.length - 2; i >= 0; i -= 2) {
  console.log(numeros2[i]);
}

console.log("-----------------------------------");

const numerosInvertidos = numeros2.reverse();

for (let i in numerosInvertidos) {
  if (i % 2 === 1) {
    console.log(`${i} => ${numerosInvertidos[i]}`);
  }
}
