const numeros = [68, 55, 123, 222, 95, 33, 45, 30];

//foreach => para cada elemento do array

for (let numero of numeros) {
  console.log(numero);
}

//foreach => para cada índice do array
for (let i in numeros) {
  console.log(`${i} => ${numeros[i]}`);
}
