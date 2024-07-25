const nome = ["Leo", "bia", "carlos", "helena", "jose"];

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

// nome.forEach(praCadaElemento)

nome.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array);
});
console.log("------------------------SEM O INDECE------------------------");
//utilizou o _ para ignorar o indice. É um parametro especial para o forEach
nome.forEach(function (elemento, _, array) {
  console.log(elemento, array);
});
