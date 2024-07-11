function somar(a, b, c, d) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); //d = underfined
console.log(somar(1, 2));//c, d = underfined
console.log(somar(1));//b, c, d = underfined
console.log(somar());//a, b, c, d = underfined
console.log(somar(1, 2, 3, 4, 5, 6, 7));

console.log("fim!")