const primeiroElemento = (arrayOuString) => arrayOuString[0];


const promessa = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Leo", "Carlos"]);
});

promessa
    .then((array) => primeiroElemento(array))
    .then(elemento => primeiroElemento(elemento))
    .then(letra => letra.toLowerCase())
    .then(resultado => console.log(resultado))
