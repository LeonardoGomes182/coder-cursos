const executar = (fn) => fn();

const bomDia = () => "Bom dia!";

const boaTarde = () => "Boa tarde!";

console.log(executar(bomDia));

let resultado = executar(boaTarde);
console.log(resultado);
