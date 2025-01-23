// fn -> 3*7
const multiplicar = (a, b) => a * b;
//fn -> 3+7
const somar = (a,b)=>a+b;
//fn -> 3-7
const subtrair = (a,b)=>a-b;
//calcular(3)(7)(fn)

//--------------TROCANDO A ORDEM DA CHAMADA------------------------------

const calcular1 = (fn) => (a) => (b) => fn(a, b);

console.log(calcular1(multiplicar)(10)(7));
 console.log(calcular1(somar)(10)(7));
// console.log(calcular1(subtrair)(10)(7));

//--------------funcao não reduzida------------------------------
// const calcular = (a) => {
//   return (b) => {
//     return (fn) => {
//         return fn(a,b)
//     };
//   };
// };
