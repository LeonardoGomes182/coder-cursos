const primeiroElemento = (arrayOuString) => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

const promessa = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Leo", "Carlos"]);
});

promessa
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log);

console.log("FIM!");
