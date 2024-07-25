const nomes = ["rafale", "pedro", "maria", "joao", "fernanda"];

function forEach(array, funcao) {
  for (let i in array) {
    funcao(array[i], i, array);
  }
}

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}
// forEach(nomes, praCadaElemento);

forEach(nomes, function(elemento, indice) {
    console.log(`${indice} => ${elemento}`)
} )