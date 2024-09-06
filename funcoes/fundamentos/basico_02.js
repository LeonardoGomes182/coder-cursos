function bomDia() {
  console.log("bom dia");
}

//function expression
const boaTarde = function () {
  console.log("Boa tarde");
};

//Passar uma função como parametro para outra funcao
function executar(x) {
  if (typeof x === "function") {
    x();
  }
}

executar(bomDia);
executar(boaTarde);

// Retonar uma função a partir de umna outra função

function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp);
  };
}

const aoQuadrado = potencia(2);

console.log(aoQuadrado(4));
console.log(aoQuadrado(5));

const aoCubo = potencia(3);
console.log(aoCubo(4));
console.log(aoCubo(5));

const resultado = potencia(3)(10);

console.log(resultado);
