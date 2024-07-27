// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//objeto criado de forma literal!
const produto = {
  nome: "Canenta BIC Preta",
  preco: 9.99,
  desconto: 0.2,
  altoCusto: false,
};

console.log(produto)
console.log( produto['nome']);
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)


console.log(typeof produto)
produto['nome']= 'Caneta BIC Verde'
console.log(produto.nome)