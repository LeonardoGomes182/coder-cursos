const a = 4;

console.log(a);
//function declaration
function bomDia() {
  console.log("bom dia");
}

bomDia();

//function expression
const boaTarde = function () {
  console.log("Boa tarde");
};

boaTarde();

function somar(a =1, b =1) {
  return a + b;
}

let resultado = somar(10, 20);

console.log(resultado);

let resultado2 = somar();

console.log(resultado2);
