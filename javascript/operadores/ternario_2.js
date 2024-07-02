const x = 8;
const y = 4;

const operacao = "*"; //+ - * /

// const resultado =
//   operacao === "+"
//     ? x + y
//     : operacao === "-"
//     ? x - y
//     : operacao === "*"
//     ? x * y
//     : x / y;

    
    
    //de forma mais organizada
    
    
    const parcial1 = operacao === "*" ? x * y : x / y;
    const parcial2 = operacao === "-" ? x - y : parcial1
 resultado =  operacao === "+" ? x + y : parcial2
    
    
    console.log(resultado);